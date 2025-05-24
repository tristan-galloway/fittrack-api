# Overview
FitTrack is a RESTful API for users to:
- Log workouts
- Track progress
- Build reusable routines
- Follow friends and share workouts
- Authenticate via OAuth (Google, GitHub, etc.)

## Tech Stack
Backend: Node.js + Express
Database: MongoDB
Auth: TBD (Passport.js with Google OAuth 2.0)
Validation: TBD (Joi or Mongoose validation)
Error Handling: TBD (Centralized middleware)

## Collections:
### users (OAuth + 7+ fields)
email, username, fitnessGoals, routinesCreated[], friends[], joinedAt, bio

### workouts
title, exercises[], duration, creatorId, date, intensityLevel, notes

## Example collections:

### Users

Schema
```json
{
  _id: ObjectId,
  username: String,
  email: String,
  avatarUrl: String,
  fitnessGoals: String,
  friends: [ObjectId], // References to users
  routines: [ObjectId], // References to routines
  joinedAt: Date,
  bio: String
}
```

Example
```json
{
  "_id": "60c72b2f9b1e8a001c8e4f3a",
  "username": "fit_jane",
  "email": "jane@example.com",
  "avatarUrl": "https://example.com/avatar/jane.jpg",
  "fitnessGoals": "Build strength and endurance",
  "friends": [],
  "routines": [],
  "joinedAt": "2024-10-01T10:00:00Z",
  "bio": "Lifelong runner and HIIT fan"
}
```

### Workouts
Schema
```json
{
  _id: ObjectId,
  userId: ObjectId, // References `users`
  date: Date,
  title: String,
  exercises: [
    {
      name: String,
      sets: Number,
      reps: Number,
      weight: Number
    }
  ],
  duration: Number, // in minutes
  intensity: { type: String, enum: ['low', 'medium', 'high'] },
  notes: String
}
```

Example
```json
{
  "_id": "60c72b2f9b1e8a001c8e4f3b",
  "userId": "6830e84aed56c2256c29b10a",
  "date": "2025-05-21T07:30:00Z",
  "title": "Morning Full Body Circuit",
  "exercises": [
    { "name": "Push-ups", "sets": 3, "reps": 12, "weight": 0 },
    { "name": "Squats", "sets": 3, "reps": 15, "weight": 0 },
    { "name": "Burpees", "sets": 3, "reps": 10, "weight": 0 }
  ],
  "duration": 40,
  "intensity": "medium",
  "notes": "Felt energized today, good start to the week!"
}
```