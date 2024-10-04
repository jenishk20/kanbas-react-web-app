import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
  return (
    <div className="container mt-5">
      <form>
        <div className="row mb-3">
          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label">
              Assignment Name
            </label>
            <input
              id="wd-name"
              value="A1 - ENV + HTML"
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10" style = {{width:"100%"}}>
            <textarea
              id="wd-description"
              className="form-control"
              rows={5}
              defaultValue={`The assignment is available online. Submit a link to the landing page of your Web Application running on Netlify. The landing page should include your full name and section, links to each of the lab assignments, links to the Kanbas application, and links to all relevant source code repositories.`}
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            Points
          </label>
          <div className="col-sm-10">
            <input id="wd-points" className="form-control" defaultValue={100} />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">
            Assignment Group
          </label>
          <div className="col-sm-10">
            <select
              id="wd-group"
              className="form-control"
              defaultValue="Assignment"
            >
              <option value="Assignment">Assignment</option>
              <option value="Homework">Homework</option>
              <option value="Exam">Exam</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-2 col-form-label"
          >
            Display Grade As
          </label>
          <div className="col-sm-10">
            <select id="wd-display-grade-as" className="form-control">
              <option value="Percentage">Percentage</option>
              <option value="Percentile">Percentile</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-2 col-form-label"
          >
            Submission Type
          </label>
          <div className="col-sm-10" style={{ border: '1px solid lightgray', padding: '10px' }}>
            <select
              id="wd-submission-type"
              className="form-control"
              defaultValue="Online"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>

            <div className="mt-2">
              <label>Online Entry Options</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-text-entry"
                />
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-website-url"
                />
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-media-recordings"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-student-annotation"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-student-annotation"
                >
                  Student Annotations
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-file-upload"
                />
                <label className="form-check-label" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Assign</label>
          <div className="col-sm-10" style={{ border: '1px solid lightgray', padding: '10px' }}>
            <div className="row">
              <div className="col-md-6 mb-2" >
                <label htmlFor="wd-assign-to">Assign to</label>
                <input type="text" id="wd-assign-to" className="form-control" />
              </div>
              <div className="col-md-6 mb-2">
                <label htmlFor="wd-due-date">Due</label>
                <input
                  type="datetime-local"
                  id="wd-due-date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-2">
                <label htmlFor="wd-available-from">Available from</label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-2">
                <label htmlFor="wd-available-until">Until</label>
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <button type="button" className="btn btn-secondary me-2">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
