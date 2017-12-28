export default function() {
  window.server = this;

  this.get('posts', {
    timing: 1000
  });

  // this.get('posts', function(schema, request) {
  //   let filters = {};
  //
  //   if (request.queryParams['filter[slug]']) {
  //     filters.slug = request.queryParams['filter[slug]'];
  //   }
  //
  //   return schema.posts.where(filters);
  // });

  this.get('/posts/:id', {
    timing: 1000
  });

  this.passthrough();
}
