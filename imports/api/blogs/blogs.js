import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Blogs = new Mongo.Collection("blogs");

// BlogSchema = new SimpleSchema({
//   created_at: {
//     type: Date,
//     label: "created at",
//     optional: true,
//     denyUpdate: false,
//     autoValue: function() {
//       if (this.isInsert)
//         return new Date();
//       else if (this.isUpsert)
//         return {$setOnInsert: new Date};
//       else
//         return this.unset();
//       }
//     },
//   // updated_at: {
//   //   type: Date,
//   //   lavel: "updated at",
//   //   optional: true,
//   //   denyInsert: true,
//   //   autoValue: function() {
//   //     if (this.isUpdate) return new Date();
//   //     }
//   //   },
//
//   title: {
//     type: String,
//     label: "blog title",
//     max: 128
//   },
//
//   content: {
//     type: String,
//     label: "blog content"
//   },
//
//   images: {
//     type: [String],
//     label: "blog images",
//     optional: true,
//     max: 128
//   },
//   user_id: {
//     type: String,
//     label: "user_id",
//     optional: true
//   }
//
// });
//
// Blogs.attachSchema(BlogSchema);
