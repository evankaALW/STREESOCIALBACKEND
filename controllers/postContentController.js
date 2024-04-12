const connection = require('../config/db');

const postContentDetails = {
    postContentData : async (req, res) => {
        try{
        var brandID;
        var imageName;
        const userResponseToggle = 1;
        const displayToggle = 0;
        const isDeleted = false;


        const { adVideoLink,dateAndTime, questionType, imageURL, questionTypeID, videoType, questionDescription, option, videoURL, 
            padx1, padx2, padx3, padx4, padx5, pady1, pady2, pady3, pady4, pady5, text, x1, x2, x3, x4, x5, y1, y2, y3, y4, y5, 
            colours, duration, adStartTime,  optionOne, optionTwo, optionThree,
            optionFour, optionFive, correctOption, brandName, isSample, movieName, movieDesc, movieRuntime, intervalTime, productionHouse, startDate, endDate, posterImage
          } = req.body;
 
          const selectQuery = `SELECT id FROM brandTable WHERE brandName=${brandName}`;

          const brandIDResult = await connection.query(selectQuery);
          brandID = brandIDResult[0].brandID;

          if(brandID){
            console.log("BrandID fetched");

            const insertQuestionQuery = `INSERT INTO questionTable ( questionDescription, optionOne, optionTwo, optionThree, optionFour
                optionFive, imageURL, font, imageName, correctOption, padx1, padx2, padx3, padx4, padx5, x1, x2, x3, x4, x5, pady1, pady2,
                pady3, pady4, pady5, y1, y2, y3, y4, y5, createdAt, updatedAt) VALUES (${questionDescription}, ${optionOne}, ${optionTwo}, ${optionThree}, ${optionFour}, ${optionFive},
            ${imageURL},${text}, ${imageName}, ${correctOption}, ${padx1}, ${padx2}, ${padx3}, ${padx4}, ${padx5}, ${x1}, ${x2}, ${x3}, ${x4}, ${x5},
             ${pady1},${pady2},${pady3}, ${pady4}, ${pady5},${y1},${y2}, ${y3}, ${y4}, ${y5}, NOW(), NOW() )
             SELECT LAST_INSERT_ID() AS id;`;

             const [questionResult, metadata ]= await connection.query(insertQuestionQuery);
             const questionID = questionResult[1][0].id;

             if(questionID){
               const insertAdQuery = `INSERT INTO advertisementTable (adVideoLink, totalOptionNumber, questionTableID, userResponseToggle, displayToggle, brandID, duration, adStartTime, isSample, isDeleted, createdAt, updatedAt )
               VALUES ('${adVideoLink}, ${option}, ${questionID}, ${userResponseToggle}, ${displayToggle} ${brandID}, ${duration}, ${adStartTime}, ${isSample}, ${isDeleted}, NOW(),NOW())`;

               const resultAD = await connection.query(insertAdQuery);

               if(resultAD){
                console.log("Advertisement insert successful")
               }
               else{
                console.log("Error while insering data into advertisementTable")
               }

                const insertMovieQuery = `INSERT INTO movieTable (movieName, movieDesc, movieRuntime, intervalTime, productionHouse, dateTime, startDate, endDate, posterImage, isDeleted, isExpired, createdAt, updatedAt)
               VALUES(${movieName}, ${movieDesc}, ${movieRuntime}, ${intervalTime}, ${productionHouse} , ${dateAndTime}, ${startDate}, ${endDate}, ${posterImage}, false, false, NOW(), NOW())`;

               const resultMovie = await connection.query(insertMovieQuery);

               if(resultMovie) {
                console.log("Advertisement insert successful")
               }else{
                console.log("Error while insering data into movieTable")
               }

             }


          }
        }catch(error){
            return res.status(500).json({"Error":error})
        }
    }
};
module.exports = postContentDetails;
