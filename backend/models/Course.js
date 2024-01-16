import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  enrollmentStatus: {
    type: String,
    enum: ['Open', 'Closed', 'In Progress'],
    default: 'Open',
  },
  thumbnail: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  prerequisites: {
    type: [String],
    default: [],
  },
  syllabus: [
    {
      week: {
        type: Number,
        required: true,
      },
      topic: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
  students: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      complete:{
        type: Number,
        required: true
      }
    },
  ],
  likes: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  }]
});

const CourseModel = mongoose.model('Course', courseSchema);

export default CourseModel;
