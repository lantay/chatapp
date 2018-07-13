<template>

  <div id="app" class="container"> 
    <div class="page-header">
      <h1>Messages at Journey</h1>
    </div>

    <div class="card">
      <div class="card-header">Send Message</div>
      <div class="card-body">
        <form id="form"
              class="form-inline">
          <div class="form-group mb-2">
            <label for="title" class="sr-only">Title</label>
            <input id="title"
                  type="text"
                  class="form-control"
                  placeholder="Message"
                   />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="author" class="sr-only">Author</label>
            <input id="author"
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                   />
          </div>
          <button class="btn btn-primary mx-sm-3 mb-2">Send</button>
        </form>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Messages:</h3>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Message</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
               <p>Message</p>
              </td>
              <td>User</td>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>
