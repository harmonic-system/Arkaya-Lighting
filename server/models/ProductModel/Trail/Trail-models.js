const { model, Schema } = require("mongoose")
const TrailSection = require("./TrailSection-models")

const trailSchema = new Schema({
  products: [TrailSection]
})


const Trail = new model("Trail", trailSchema)


module.exports = Trail











// const { model, Schema } = require("mongoose")

// const trailSchema = new Schema({
//   products: [
//     {
//       card1: {
//         header: {
//           type: String,
//           required: true
//         },
//         cardInfo: [
//           {
//             productfile: {
//               public_id: {
//                 type: String,
//                 required: true
//               },
//               url: {
//                 type: String,
//                 required: true
//               },
//             },
//             productname: {
//               type: String,
//               required: true
//             },
//             model: {
//               type: String,
//               required: true
//             },
//             description: {
//               des: {
//                 type: String,
//               },
//               spec1: {
//                 type: String,
//               },
//               spec2: {
//                 type: String,
//               },
//               spec3: {
//                 type: String,
//               },
//               spec4: {
//                 type: String,
//               },
//               spec5: {
//                 type: String,
//               },
//               spec6: {
//                 type: String,
//               },
//               spec7: {
//                 type: String,
//               },
//               spec8: {
//                 type: String,
//               },
//               spec9: {
//                 type: String,
//               },
//               spec10: {
//                 type: String,
//               },
//             },
//           },
//         ]
//       },
//     },
//     {
//       card2: {
//         header: {
//           type: String,
//           required: true
//         },
//         cardInfo: [
//           {
//             productfile: {
//               public_id: {
//                 type: String,
//                 required: true
//               },
//               url: {
//                 type: String,
//                 required: true
//               },
//             },
//             productname: {
//               type: String,
//               required: true
//             },
//             model: {
//               type: String,
//               required: true
//             },
//             description: {
//               des: {
//                 type: String,
//               },
//               spec1: {
//                 type: String,
//               },
//               spec2: {
//                 type: String,
//               },
//               spec3: {
//                 type: String,
//               },
//               spec4: {
//                 type: String,
//               },
//               spec5: {
//                 type: String,
//               },
//               spec6: {
//                 type: String,
//               },
//               spec7: {
//                 type: String,
//               },
//               spec8: {
//                 type: String,
//               },
//               spec9: {
//                 type: String,
//               },
//               spec10: {
//                 type: String,
//               },
//             },
//           },
//         ]
//       },
//     },
//     {
//       card3: {
//         header: {
//           type: String,
//           required: true
//         },
//         cardInfo: [
//           {
//             productfile: {
//               public_id: {
//                 type: String,
//                 required: true
//               },
//               url: {
//                 type: String,
//                 required: true
//               },
//             },
//             productname: {
//               type: String,
//               required: true
//             },
//             model: {
//               type: String,
//               required: true
//             },
//             description: {
//               des: {
//                 type: String,
//               },
//               spec1: {
//                 type: String,
//               },
//               spec2: {
//                 type: String,
//               },
//               spec3: {
//                 type: String,
//               },
//               spec4: {
//                 type: String,
//               },
//               spec5: {
//                 type: String,
//               },
//               spec6: {
//                 type: String,
//               },
//               spec7: {
//                 type: String,
//               },
//               spec8: {
//                 type: String,
//               },
//               spec9: {
//                 type: String,
//               },
//               spec10: {
//                 type: String,
//               },
//             },
//           },
//         ]
//       }
//     },
//     {
//       card4: {
//         header: {
//           type: String,
//           required: true
//         },
//         cardInfo: [
//           {
//             productfile: {
//               public_id: {
//                 type: String,
//                 required: true
//               },
//               url: {
//                 type: String,
//                 required: true
//               },
//             },
//             productname: {
//               type: String,
//               required: true
//             },
//             model: {
//               type: String,
//               required: true
//             },
//             description: {
//               des: {
//                 type: String,
//               },
//               spec1: {
//                 type: String,
//               },
//               spec2: {
//                 type: String,
//               },
//               spec3: {
//                 type: String,
//               },
//               spec4: {
//                 type: String,
//               },
//               spec5: {
//                 type: String,
//               },
//               spec6: {
//                 type: String,
//               },
//               spec7: {
//                 type: String,
//               },
//               spec8: {
//                 type: String,
//               },
//               spec9: {
//                 type: String,
//               },
//               spec10: {
//                 type: String,
//               },
//             },
//           },
//         ]
//       }
//     },
//   ]
// })


// const Trail = new model("Trail", trailSchema)


// module.exports = Trail
