webpackJsonp([0],{ZYmg:function(e,t,n){"use strict";var o=n("p+dL"),g={GET_LIST:"/blog",GET_DETAIL:"/blog/:blogId",CREATE:"/blog",UPDATE:"/blog/:blogId",DELETE:"/blog/:blogId"};t.a={getBlogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},t=e.page,n=void 0===t?1:t,d=e.userId,a=e.atIndex;return Object(o.a)(g.GET_LIST,"GET",{page:n,userId:d,atIndex:a})},getIndexBlogs:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1}).page,t=void 0===e?1:e;return this.getBlogs({page:t,atIndex:!0})},getBlogsByUserId:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{page:1},n=t.page,o=void 0===n?1:n,g=t.atIndex;return this.getBlogs({userId:e,page:o,atIndex:g})},getDetail:function(e){var t=e.blogId;return Object(o.a)(g.GET_DETAIL.replace(":blogId",t))},updateBlog:function(e,t){var n=e.blogId,d=t.title,a=t.content,i=t.description,l=t.atIndex;return Object(o.a)(g.UPDATE.replace(":blogId",n),"PATCH",{title:d,content:a,description:i,atIndex:l})},deleteBlog:function(e){var t=e.blogId;return Object(o.a)(g.DELETE.replace(":blogId",t),"DELETE")},createBlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",content:"",description:"",atIndex:"false"},t=e.title,n=void 0===t?"":t,d=e.content,a=void 0===d?"":d,i=e.description,l=void 0===i?"":i;e.atIndex;return Object(o.a)(g.CREATE,"POST",{title:n,content:a,description:l})}}}});
//# sourceMappingURL=0.1acac06d3bf03b52a89d.js.map