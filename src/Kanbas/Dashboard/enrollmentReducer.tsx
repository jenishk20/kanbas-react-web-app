import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState: {
    enrollments: enrollments,
  },
  reducers: {
    enrollInCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollFromCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
