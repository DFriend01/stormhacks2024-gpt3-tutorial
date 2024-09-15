const request = require('supertest');
const app = require('../src/server');

describe('Server Routes', () => {
    let conversationId;
    let messageId;

    it('should create a new conversation', (done) => {
        request(app)
            .post('/api/conversations')
            .send({ title: 'Test Conversation' })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property('title', 'Test Conversation');
                conversationId = res.body.id;
                done();
            });
    });

    it('should get all conversations', (done) => {
        request(app)
            .get('/api/conversations')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should update the conversation title', (done) => {
        request(app)
            .put(`/api/conversations/${conversationId}`)
            .send({ title: 'Updated Conversation Title' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property('id', conversationId);
                expect(res.body).to.have.property('title', 'Updated Conversation Title');
                done();
            });
    });

    it('should add a message to the conversation', (done) => {
        request(app)
            .post(`/api/conversations/${conversationId}/messages`)
            .send({ role: 'user', message: 'Hello, how can I help you?' })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property('conversation_id', conversationId);
                expect(res.body).to.have.property('message_id');
                expect(res.body).to.have.property('role', 'user');
                expect(res.body).to.have.property('message', 'Hello, how can I help you?');
                messageId = res.body.message_id;
                done();
            });
    });

    it('should get all messages of the conversation', (done) => {
        request(app)
            .get(`/api/conversations/${conversationId}/messages`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should delete the conversation', (done) => {
        request(app)
            .delete(`/api/conversations/${conversationId}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.have.property('message', 'Conversation deleted');
                done();
            });
    });
});