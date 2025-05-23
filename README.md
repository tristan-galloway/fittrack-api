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

### users
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

### workouts
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