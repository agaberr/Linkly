// const request = require('supertest');
// const express = require('express');
// const bodyParser = require('body-parser');
// const User = require('../models/User');
// const userController = require('../controllers/userControllers');

// jest.mock('../models/User');

// const app = express();
// app.use(bodyParser.json());

// app.get('/api/users', userController.getAllUsers);
// app.get('/api/users/:id', userController.getUser);
// app.post('/api/users', userController.createUser);
// app.put('/api/users/:id', userController.updateUser);
// app.delete('/api/users/:id', userController.deleteUser);
// app.get('/api/conversation-users', userController.getConversationUsers);

// describe('User Controller', () => {
//     beforeEach(() => {
//         jest.clearAllMocks();
//     });

//     describe('getAllUsers', () => {
//         it('should return all users', async () => {
//             const users = [{ username: 'user1', email: 'user1@example.com' }];
//             User.find.mockResolvedValue(users);

//             const response = await request(app).get('/api/users');

//             expect(response.statusCode).toBe(200);
//             expect(response.body).toEqual(users);
//             expect(User.find).toHaveBeenCalledWith();
//         });

//         it('should return 400 if no users found', async () => {
//             User.find.mockResolvedValue([]);

//             const response = await request(app).get('/api/users');

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('No users found');
//         });
//     });

//     describe('getUser', () => {
//         it('should return a user by id', async () => {
//             const user = { username: 'user1', email: 'user1@example.com' };
//             User.findById.mockResolvedValue(user);

//             const response = await request(app).get('/api/users/1');

//             expect(response.statusCode).toBe(200);
//             expect(response.body).toEqual(user);
//             expect(User.findById).toHaveBeenCalledWith('1');
//         });

//         it('should return 400 if no user id provided', async () => {
//             const response = await request(app).get('/api/users/');

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('User ID is required');
//         });

//         it('should return 400 if no user found', async () => {
//             User.findById.mockResolvedValue(null);

//             const response = await request(app).get('/api/users/1');

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('No user found');
//         });
//     });

//     describe('createUser', () => {
//         it('should create a new user', async () => {
//             const userData = { username: 'user1', email: 'user1@example.com', password: 'password' };
//             const user = { ...userData, _id: '1' };
//             User.create.mockResolvedValue(user);
//             User.findOne.mockResolvedValue(null);

//             const response = await request(app).post('/api/users').send(userData);

//             expect(response.statusCode).toBe(201);
//             expect(response.body.message).toBe('User created successfully');
//             expect(User.create).toHaveBeenCalledWith(expect.objectContaining({
//                 username: 'user1',
//                 email: 'user1@example.com'
//             }));
//         });

//         it('should return 400 if required fields are missing', async () => {
//             const response = await request(app).post('/api/users').send({});

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('Please enter all fields');
//         });

//         it('should return 400 if user already exists', async () => {
//             User.findOne.mockResolvedValue({ username: 'user1' });

//             const response = await request(app).post('/api/users').send({ username: 'user1', email: 'user1@example.com', password: 'password' });

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('User already exists');
//         });
//     });

//     describe('updateUser', () => {
//         it('should update an existing user', async () => {
//             const userData = { id: '1', username: 'user1', email: 'user1@example.com', password: 'newpassword' };
//             const user = { _id: '1', username: 'user1', email: 'user1@example.com' };
//             User.findById.mockResolvedValue(user);
//             User.findOne.mockResolvedValue(null);
//             user.save = jest.fn().mockResolvedValue(user);

//             const response = await request(app).put(`/api/users/1`).send(userData);

//             expect(response.statusCode).toBe(200);
//             expect(response.body.message).toBe(`${user.username} updated successfully`);
//         });

//         it('should return 400 if required fields are missing', async () => {
//             const response = await request(app).put('/api/users/1').send({});

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('Please enter all fields');
//         });

//         it('should return 400 if no user found', async () => {
//             User.findById.mockResolvedValue(null);

//             const response = await request(app).put('/api/users/1').send({ id: '1', username: 'user1', email: 'user1@example.com' });

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('No user found');
//         });

//         it('should return 409 if username already exists', async () => {
//             const user = { _id: '1', username: 'user1', email: 'user1@example.com' };
//             User.findById.mockResolvedValue(user);
//             User.findOne.mockResolvedValue({ _id: '2', username: 'user1' });

//             const response = await request(app).put('/api/users/1').send({ id: '1', username: 'user1', email: 'user1@example.com' });

//             expect(response.statusCode).toBe(409);
//             expect(response.body.message).toBe('User already exists');
//         });
//     });

//     describe('deleteUser', () => {
//         it('should delete an existing user', async () => {
//             const user = { _id: '1', username: 'user1' };
//             User.findById.mockResolvedValue(user);
//             User.deleteOne.mockResolvedValue({ deletedCount: 1 });

//             const response = await request(app).delete('/api/users/1');

//             expect(response.statusCode).toBe(200);
//             expect(response.body).toBe('User deleted successfully');
//             expect(User.findById).toHaveBeenCalledWith('1');
//             expect(User.deleteOne).toHaveBeenCalledWith({ _id: '1' });
//         });

//         it('should return 400 if user is not signed in', async () => {
//             const response = await request(app).delete('/api/users/');

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('You are not signed in to delete account');
//         });

//         it('should return 400 if no user found', async () => {
//             User.findById.mockResolvedValue(null);

//             const response = await request(app).delete('/api/users/1');

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('No user found');
//         });
//     });

//     describe('getConversationUsers', () => {
//         it('should return conversation users', async () => {
//             const users = [{ username: 'user1', email: 'user1@example.com' }];
//             User.find.mockResolvedValue(users);

//             const response = await request(app).get('/api/conversation-users');

//             expect(response.statusCode).toBe(200);
//             expect(response.body).toEqual(users);
//             expect(User.find).toHaveBeenCalledWith({ _id: { $ne: undefined } });
//         });

//         it('should return 400 if no users found', async () => {
//             User.find.mockResolvedValue([]);

//             const response = await request(app).get('/api/conversation-users');

//             expect(response.statusCode).toBe(400);
//             expect(response.body.message).toBe('No users found');
//         });
//     });
// });
