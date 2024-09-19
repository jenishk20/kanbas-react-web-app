export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a link to the landing page of
        your Web Application running on Netlify. The landing page should include
        the following : Your full name and section links to each of the lab
        assignment links to the kanbas application. Links to all relevant source
        code repos. The Kanbas application should include a link to navigate
        back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" value="Assignment">
              <option value="Assignment">Assignment</option>
              <option value="Homework">Homework</option>
              <option value="Exam">Exam</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Percentile">Percentile</option>
            </select>
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" value="Assignment">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="entry">Online Entry Options</label>
            <br />

            <table>
              <tr>
                <td>
                  <input type="checkbox" id="wd-text-entry" />
                </td>
                <td>
                  <label htmlFor="wd-text-entry">Text Entry</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="wd-website-url" />
                </td>
                <td>
                  <label htmlFor="wd-website-url">Website URL</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="wd-media-recordings" />
                </td>
                <td>
                  <label htmlFor="wd-media-recordings">Media Recording</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="wd-student-annotation" />
                </td>
                <td>
                  <label htmlFor="wd-student-annotation">
                    Student Annotations
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="wd-file-upload" />
                </td>
                <td>
                  <label htmlFor="wd-file-upload">File Uploads</label>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <tr>
              <label htmlFor="wd-assign-to">Assign To</label>
            </tr>
            <tr>
              <input type="text" id="wd-assign-to" />
            </tr>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <tr>
              <label htmlFor="wd-assign-to">Assign To</label>
            </tr>
            <tr>
              <input type="text" id="wd-assign-to" />
            </tr>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <tr>
              <label htmlFor="wd-due-date">Due Date</label>
            </tr>
            <tr>
              <input type="date" id="wd-due-date" />
            </tr>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <td>
              <tr>
                <label htmlFor="wd-available-from">Available From</label>
              </tr>
              <tr>
                <input type="date" id="wd-available-from" />
              </tr>
            </td>
            <td>
              <tr>
                <label htmlFor="wd-available-until">Available Until</label>
              </tr>
              <tr>
                <input type="date" id="wd-available-until" />
              </tr>
            </td>
          </td>
        </tr>
        <br />
        <tr>
          <td colSpan={2}>
            <hr />
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="right">
            <button id="wd-cancel">Cancel</button>
            <button id="wd-save">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
