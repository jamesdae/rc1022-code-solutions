import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: ''
    };
    this.fileInputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCaptionChange = this.handleCaptionChange.bind(this);
  }

  handleCaptionChange(event) {
    this.setState({ caption: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = new FormData();
    form.append('caption', this.state.caption);
    form.append('image', this.fileInputRef.current.files[0]);
    const myInit = {
      method: 'POST',
      body: form
    };
    fetch('/api/uploads', myInit)
      .then(res => res.json())
      .then(response => {
        console.log('fetching..', response);
        this.setState({ caption: '' });
        this.fileInputRef.current.value = null;
      })
      .catch(err => console.error(err));

    /**
     * Prevent the browser's default behavior for form submissions.
     *
     * Create a `new` FormData object.
     *
     * Append two entries to the form data object you created.
     *   1. "caption" the value of this.state.caption
     *   2. "image" the value of this.fileInputRef.current.files[0]
     *
     * Use fetch() to send a POST request to /api/uploads. The body
     * should be the form data object you created (not a JSON string)
     * Headers are not necessary as fetch will use the correct Content-Type
     * automatically (multipart/form-data).
     *
     * Then 😉,
     *   parse the JSON response body
     * Then 😉,
     *   log the parsed response body
     *   set the caption state back to an empty string
     *   assign null to this.fileInputRef.current.value to clear the file
     * Catch any error in the promise chain.
     *
     * References:
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
     * https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
     * https://reactjs.org/docs/refs-and-the-dom.html
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
          <div className="col col-md-8">
            <h3 className="text-center mb-5">React File Uploads</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Caption
                </label>
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  value={this.state.caption}
                  onChange={this.handleCaptionChange}
                  className="form-control bg-light" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <input
                  required
                  type="file"
                  name="image"
                  ref={this.fileInputRef}
                  accept=".png, .jpg, .jpeg, .gif" />
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
