// call after ajax successfully request data
function iterateParks(data) {

    // console.log(data);

    $.each(data.result.records, function(recordKey, recordValue) {

        var parkName = recordValue["PARK_NAME"];
        var streetAddress = recordValue["STREET_ADDRESS"];
        var suburb = recordValue["SUBURB"];
        var postCode = recordValue["POST_CODE"];
        var parkLatitude = recordValue["LAT"];
        var parkLongtitude = recordValue["LONG"];

        if (parkName && streetAddress && suburb && postCode) {
            $("#records").append(
                $('<article class="record">').append(
                    $('<h2 class="park-title">').text(parkName),
                    $('<a>').attr("href", "./images/parks/" + parkName + ".jpg").attr("data-lightbox", "./images/parks/" + parkName + ".jpg").append($('<img class="hall-img">').attr("src", "./images/parks/" + parkName + ".jpg")),
                    $('<p class="street-address">').text(streetAddress),
                    $('<p class="post-code">').text(postCode),
                    $('<p class="suburb">').text(suburb),
                    $('<div class="extra-information">').append(
                        $('<p class="latitude">').text(parkLatitude),
                        $('<p class="longtitude">').text(parkLongtitude),
                    )
                )
            );
        }
    });
}

// show the player at the player status bar
function initialisePlayers(playerNumber) {
    for (var i = 0; i < playerNumber; i++) {
        $(".player-info").append(
            $('<player class="a-player" id="' + (i + 1) + '"' + '>').append(
                $('<div class="first-box">').append(
                    $('<i class="uil uil-arrow-circle-down"></i>'),
                    $('<img class="player-image" src="./images/chess-1' + i + '.png">'),
                    $('<p class="player-name">').text("Player " + (i + 1)),
                    $('<div>')
                ),
                $('<div class="second-box">').append(
                    $('<div class="money-info">').append(
                        $('<i class="uil uil-star"></i>'),
                        $('<p class="money-total">').text(10)
                    ),
                    $('<div class="house-info">').append(
                        $('<i class="uil uil-home"></i>'),
                        $('<p class="house-total">').text(0)
                    ),
                    $('<div class="round-info">').append(
                        $('<i class="uil uil-sync uil-sync-color"></i>'),
                        $('<p class="round-total">').text(1)
                    )
                )
            )
        );
    }

}

// to stores information of property into a list of objects
function initialisePropertyInformation(recordsInGame, randomList) {
    for (let i = 0; i < 22; i++) {
        if (i !== 0 && i !== 2 && i !== 5 && i !== 13 && i !== 16) {
            var obj = {};
            obj.title = $('#records').children(".record").eq(randomList[i]).children(".hall-title").html();
            obj.img = $('#records').children(".record").eq(randomList[i]).children("a").attr("href");
            obj.describe = $('#records').children(".record").eq(randomList[i]).children(".container").children(".hall-intro").html();
            obj.location = $('#records').children(".record").eq(randomList[i]).children(".location").html();
            // get extra information
            obj.Fridge = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(0).html();
            obj.Boiler = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(1).html();
            obj.Kitche = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(2).html();
            obj.Baby = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(3).html();
            obj.Toilet = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(4).html();
            obj.Meetin = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(5).html();
            obj.Fan = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(6).html();
            obj.Oven = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(7).html();
            obj.Value = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(8).html();
            obj.Rent = $('#records').children('.record').eq(randomList[i]).children('.extra-information').children('p').eq(9).html();
            // recordsInGame[i] = $('#records').children(".record").eq(0).html()
            recordsInGame[i] = obj;
        }
    }
}

// calculate the total loading time and return 
function pageLoadingTime(startTime) {
    var endTime = new Date().getDate();
    return (endTime - startTime);
}

// read the data and put information of library into tags in html file
function iterateLibraries(data) {

    // console.log(data);

    $.each(data.result.records, function(recordKey, recordValue) {

        var libName = recordValue["Venue"];
        var summery = recordValue["Summary"];
        var website = recordValue["Website"];
        var phone = recordValue["Phone"];
        var latitude = recordValue["Latitude"];
        var longtitude = recordValue["Longitude"];
        var openTime = recordValue["Open"];
        var facility = recordValue["Facilities"];
        var address = recordValue["Address"];


        if (libName && summery && address && website) {
            $("#libraries").append(
                $('<article class="record">').append(
                    $('<h2 class="lib-title">').text(libName),
                    $('<a>').attr("href", "./images/libraryImage/" + libName + ".jpg").attr("data-lightbox", "./images/libraryImage/" + libName + ".jpg").append($('<img class="lib-img">').attr("src", "./images/libraryImage/" + libName + ".jpg")),
                    $('<p class="lib-address">').text(address),
                    $('<p class="lib-summery">').text(summery),
                    $('<p class="lib-website">').text(website),
                    $('<p class="lib-phone">').text(phone),
                    $('<p class="lip-open-time">').text(openTime),
                    $('<p class="lib-facility">').text(facility),
                    $('<div class="extra-information">').append(
                        $('<p class="latitude">').text(latitude),
                        $('<p class="longtitude">').text(longtitude),
                        $('<p class="values">').text(5),
                    )
                )
            );
        }
    });
}

// read the data and put information of halls into tags in html file
function iterateHalls(data, startTime) {

    // console.log(data);

    $.each(data.result.records, function(recordKey, recordValue) {
        var recordTitle = recordValue["Community Hall Name"];
        var recordImage = recordValue["Photos"];
        var recordDescription = recordValue["Description"];
        var recordLocation = recordValue["Location"];

        var recordFridge = recordValue['Fridge'];
        var recordBoiler = recordValue['Hot water boiler'];
        var recordKitchen = recordValue['Kitchen'];
        var recordBaby = recordValue['Baby Change'];
        var recordToilet = recordValue['Ambulant Toilet'];
        var recordMeetingRoom = recordValue['Meeting Room(s)'];
        var recordFans = recordValue['Ceiling Fans'];
        var recordOven = recordValue['Stove/Oven'];
        var latitude = recordValue['Latitude'];
        var longitude = recordValue['Longitude'];
        var recordFacilityValue = 0;
        var recordFacilityRent = 0;

        if (recordTitle && recordImage && recordDescription && recordLocation) {

            if (recordFridge === "Yes") recordFacilityValue += 1;
            if (recordBoiler === "Yes") recordFacilityValue += 1;
            if (recordKitchen === "Yes") recordFacilityValue += 1;
            if (recordBaby === "Yes") recordFacilityValue += 1;
            if (recordToilet === "Yes") recordFacilityValue += 1;
            if (recordMeetingRoom === "Yes") recordFacilityValue += 1;
            if (recordFans === "Yes") recordFacilityValue += 1;
            if (recordOven === "Yes") recordFacilityValue += 1;
            recordFacilityRent = Math.floor(recordFacilityValue / 3) + 1;

            $("#records").append(
                $('<article class="record">').append(
                    $('<h2 class="hall-title">').text(recordTitle),
                    $('<a>').attr("href", recordImage).attr("data-lightbox", "image-" + recordImage).append($('<img class="hall-img">').attr("src", recordImage)),
                    $('<article class="container">').append(
                        $('<p class="hall-intro">').text(recordDescription)
                    ),
                    $('<p class="location">').text(recordLocation),
                    $('<div class="extra-information">').append(
                        $('<p>').text(recordFridge),
                        $('<p>').text(recordBoiler),
                        $('<p>').text(recordKitchen),
                        $('<p>').text(recordBaby),
                        $('<p>').text(recordToilet),
                        $('<p>').text(recordMeetingRoom),
                        $('<p>').text(recordFans),
                        $('<p>').text(recordOven),
                        $('<p>').text(recordFacilityValue),
                        $('<p>').text(recordFacilityRent),
                        $('<p class="latitude">').text(latitude),
                        $('<p class="longtitude">').text(longitude),
                    )
                )
            );

        }

    });

    // delay method to hide loading gif
    setTimeout(function() {
        $('body').addClass('loaded');
    }, pageLoadingTime(startTime) + 1000);
}

// random the halls in the game
function getRandomList() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    var newArr = [];
    for (var i = 0; i < 22; i++) {
        var num = Math.floor(Math.random() * arr.length);
        newArr.push(arr[num]);
        arr.splice(num, 1);
    }
    return newArr;
}

// random the park in the game
function getRandomList2() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var newArr = [];
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * arr.length);
        newArr.push(arr[num]);
        arr.splice(num, 1);
    }
    return newArr;
}

// random the library in the game
function getRandomList3() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var newArr = [];
    for (var i = 0; i < 7; i++) {
        var num = Math.floor(Math.random() * arr.length);
        newArr.push(arr[num]);
        arr.splice(num, 1);
    }
    return newArr;
}

// random the library in the game
function getRandomList4() {
    var arr = [0, 1, 2, 3, 4, 5, 6];
    var newArr = [];
    for (var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * arr.length);
        newArr.push(arr[num]);
        arr.splice(num, 1);
    }
    return newArr;
}

// get the number of player selected by user from previous html page
function getPlayerNumber() {
    var reg = new RegExp("(^|&)playerNum=([^&]*)(&|$)");
    // console.log(window.location.search.substr(1));
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return r[2];
    } else {
        return null;
    }
}

// set the margin left and top pixel of player
function setPlayerAt(player, left, top) {
    player.css({
        "marginLeft": left,
        "marginTop": top,
    })
}

// get the margin left and top of the board
function getPositionOfBox(index) {
    i = index + 1;
    return [$(".board-" + i).css("marginLeft"), $(".board-" + i).css("marginTop")]
}

// set the chess on the given id of board
function setChessOnBoard(player, boardNum) {
    position = getPositionOfBox(boardNum);
    x = parseInt(position[0].split("px")[0]) + 3;
    y = parseInt(position[1].split("px")[0]) - 15;

    // set player at given id of board
    setPlayerAt(player, x, y);
}

// set the players at waiting area once user jump to this page
function initialChessOnWaiting(players) {
    // initialize chess(es) on waiting area
    if (players.length == 1) {
        setPlayerAt(players[0], -270, 160);
    } else if (players.length == 2) {
        setPlayerAt(players[0], -270, 160);
        setPlayerAt(players[1], -210, 160);
    } else {
        setPlayerAt(players[0], -270, 160);
        setPlayerAt(players[1], -210, 160);
        setPlayerAt(players[2], -150, 160);
    }
    // prompt the next player on the screen
    $("#prompt").append(
        $('<img class="player-image" src="./images/chess-10.png">'),
        $('<p class="prompt-player">').text("Player " + 1),
    );
}

// set the animate on given board ID
function animateOnBoardWithID(boardID) {
    i = boardID + 1;
    // console.log(i);
    $(".board-" + i).animate({
        opacity: '0.1',
    }, "slow");
    $(".board-" + i).animate({
        opacity: '1',
    }, "slow");
}

// one by one show show the animate of board when chess moving
function showAnimateOnBoards(start, end, nextPlayerID) {
    var count = 1;
    // use let key word to avoid Asynchronous 
    if (end > start) {
        // within a round
        for (let i = start + 1; i <= end; i++) {
            setTimeout(function() {
                animateOnBoardWithID(i);
            }, 300 * count);
            count++;
        }
    } else {
        // start another round
        for (let i = start + 1; i <= 21; i++) {
            // rest of previous round
            setTimeout(function() {
                animateOnBoardWithID(i);
            }, 300 * count);
            count++;
        }
        for (let i = 0; i <= end; i++) {
            // steps in new round
            setTimeout(function() {
                animateOnBoardWithID(i);
            }, 300 * count);
            count++;
        }
    }
    setTimeout(function() {
        $("#prompt").children("img").attr("src", "./images/chess-1" + (nextPlayerID) + ".png");
        $("#prompt").children(".prompt-player").html("Player " + (nextPlayerID + 1));
    }, 300 * count)
}

// show animations on boards to represent moving activity of player
function showAllAnimatesOnBoards(preBoardID, newBoardID, players, playerID, nextPlayerID) {
    // one by one show animate of board representing moving chess
    showAnimateOnBoards(preBoardID, newBoardID, nextPlayerID);

    // calculate the time cost of previous action
    if (newBoardID < preBoardID) {
        delay = 300 * (22 + newBoardID - preBoardID);
    } else {
        delay = 300 * (newBoardID - preBoardID + 1);
    }
    // set chess on the new board after showing boards animation
    setTimeout(function() {
        setChessOnBoard(players[playerID], newBoardID);
    }, delay);
}

// update prompt interaction during the game
function diceAnimation(diceNum) {
    // show a dice gif and result of dice
    $('.domino').attr("visibility", "visible");
    $('.domino').attr("src", "./images/domino4.gif");
    setTimeout(function() {
        $('.domino').attr("src", "./images/dice" + diceNum + ".jpg");
    }, 1000);
}

// some animation after go button clicked
function goButtonAnimation() {
    $(".go-button").animate({
        fontSize: 100,
        borderWidth: 30,
    }, 300);
    $(".go-button").animate({
        fontSize: 40,
        borderWidth: 2,
    }, 300);
}

// compare all of the props get by player with given board ID
function firstTimeComeHere(boardID, playerProperty, playerID) {
    for (var playerProps = 0; playerProps < playerProperty.length; playerProps++) {
        for (var propNum = 0; propNum < playerProperty[playerProps].length; propNum++) {
            if (boardID === playerProperty[playerProps][propNum]) {
                return playerProps;
            }
        }
    }
    return null;
}

// set animation to show promption of stars and propities
function interactPromption(information) {
    $('#prompt-information-box').empty()
        $('#prompt-information-box').animate(
            {
                opacity: 1,
                zIndex: 20
            }, 0
        )
        $('#prompt-information-box').append(
            $('<p class="text-promption">').text(information)
        )
        setTimeout(() => {
            $('#prompt-information-box').animate(
                {
                    opacity: 0,
                    zIndex: -1
                }
            )
        }, 1500);
}

// trade stars during the game
function tradeStar(playerID, playerHoldProp, playerInfo, rentStar) {
    if (playerID === playerHoldProp) {
        interactPromption("You already have this hall, you don't need to pay anyone.")
    } else {
        interactPromption("Oops, you are at Player " + (playerHoldProp + 1) + "'s hall, you should pay " + rentStar + " stars to him ")
        star1 = parseInt(playerInfo[playerID].stars) - parseInt(rentStar);
        star2 = parseInt(playerInfo[playerHoldProp].stars) + parseInt(rentStar);
        playerInfo[playerID].stars = star1;
        playerInfo[playerHoldProp].stars = star2;
        $('.player-info').children().eq(playerID).children('.second-box').children('.money-info').children('p').text(star1);
        $('.player-info').children().eq(playerHoldProp).children('.second-box').children('.money-info').children('p').text(star2);
    }
}

// update the number of star and property of player
function addPropertyToPlayer(playerID, playerProperty, playerInfo, newBoardID, recordsInGame) {
    playerProperty[playerID][playerInfo[playerID].props] = (newBoardID + 1);
    var numOfProperty = parseInt(playerInfo[playerID].props) + 1;
    var numOfStar = parseInt(playerInfo[playerID].stars) + parseInt(recordsInGame[newBoardID].Value);
    playerInfo[playerID].props = numOfProperty;
    playerInfo[playerID].stars = numOfStar;
    $('.player-info').children().eq(playerID).children('.second-box').children('.house-info').children('p').text(numOfProperty);
    $('.player-info').children().eq(playerID).children('.second-box').children('.money-info').children('p').text(numOfStar);
    // interactPromption("You got a new hall and " + recordsInGame[newBoardID].Value + " stars! Your total stars is: " + numOfStar)
}

// add give number of stars to player at some specific parks
function modifyStarsAtPark(playerID, playerInfo, starsToAdd) {
    var numOfStar = parseInt(playerInfo[playerID].stars) + starsToAdd;
    playerInfo[playerID].stars = numOfStar;
    $('.player-info').children().eq(playerID).children('.second-box').children('.money-info').children('p').text(numOfStar);
    
    // animation
    if (starsToAdd > 0) {
        interactPromption("Congratulate! You got " + starsToAdd + " stars")
    } else {
        interactPromption("Oops! You lost " + Math.abs(starsToAdd) + " stars")
    }
}

function modifyStars(playerID, playerInfo, starsToAdd) {
    var numOfStar = parseInt(playerInfo[playerID].stars) + starsToAdd;
    playerInfo[playerID].stars = numOfStar;
    $('.player-info').children().eq(playerID).children('.second-box').children('.money-info').children('p').text(numOfStar);
}

// withdraw a property
function withdrawProperty(playerID, playerProperty, playerInfo) {
    var playerPropertyNumber = parseInt(playerInfo[playerID].props);

    if (playerPropertyNumber === 0) {
        modifyStarsAtPark(playerID, playerInfo, -5)
        return;
    }

    for (var propNum = 0; propNum < playerProperty[playerID].length; propNum++) {
        if (playerProperty[playerID][propNum] === undefined) {
            playerProperty[playerID][propNum - 1] = undefined;
        }
    }

    var numOfProperty = parseInt(playerInfo[playerID].props) - 1;
    playerInfo[playerID].props = numOfProperty;
    $('.player-info').children().eq(playerID).children('.second-box').children('.house-info').children('p').text(numOfProperty);
    interactPromption("Oops! You lost a property ")
}

// let player play again
function addStarsToOthers(playerID, playerInfo) {
    for (var i = 0; i < playerInfo.length; i++) {
        if (playerID !== i) {
            var numOfStar = parseInt(playerInfo[i].stars) + 4;
            playerInfo[i].stars = numOfStar;
            $('.player-info').children().eq(i).children('.second-box').children('.money-info').children('p').text(numOfStar);
        }
    }
    interactPromption("Other player get 4 stars!")
}

// upload information into map
function mapInformationIntoMap(randomList, randomList2, randomList3, randomList4) {
    var greyIcon = new L.Icon({ // grey
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var park = new L.Icon({ // yellow
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    myMap = L.map("map").setView([-27.45449, 153.034766], 10.5);



    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidXFpZHJ1Z28iLCJhIjoiY2tlcDdmbDV2MDc2ZjJ4bnk5bTgwcmkwbSJ9.aiKl3J-I-lVcj0iTllZlpg", {
        // attribution: 'Map data © href="https://www.openstreetmap.org/">OpenStreetMap contributors, href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA, Imagery © href="https://www.mapbox.com/">Mapbox', 
        maxZoom: 18,
        id: 'mapbox/streets-v11', //mapbox/streets-v11    mapbox/satellite-v9     
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmFud2VuamluZyIsImEiOiJja3QwdWRwbHAwNG1mMm5sbHFiZXB3MngwIn0.0qJ9B_F2J3fd_09Y2cn-KQ'
            // your.mapbox.access.token
            // pk.eyJ1IjoibmFud2VuamluZyIsImEiOiJja3QwdWRwbHAwNG1mMm5sbHFiZXB3MngwIn0.0qJ9B_F2J3fd_09Y2cn-KQ

    }).addTo(myMap);

    // add marks of hall into map
    for (var i = 0; i < randomList.length; i++) {
        if (i !== 0 && i !== 2 && i !== 5 && i !== 13 && i !== 16 && !(i >= 6 && i <= 12) && !(i >= 19 && i <= 21)) {
            var lat = $("#records").children(".record").eq(randomList[i]).children('.extra-information').children('.latitude').html();
            var long = $("#records").children(".record").eq(randomList[i]).children('.extra-information').children('.longtitude').html();
            var hallTitle = $("#records").children(".record").eq(randomList[i]).children('.hall-title').html();
            var hallIntro = $("#records").children(".record").eq(randomList[i]).children('.container').children('.hall-intro').html();
            var location = $("#records").children(".record").eq(randomList[i]).children('.location').html();

            var marker = L.marker([lat, long], { icon: greyIcon }).addTo(myMap);
            popupText = "" + hallTitle + "<br>" +
                "This Hall is on Board: " + (i + 1) + "<br>" +
                "Introduction: " + hallIntro + "<br>" +
                "Location: " + location
            marker.bindPopup(popupText).openPopup();
        }
    }

    // add marks of park into map
    for (var i = 0; i < randomList2.length; i++) {
        var lat = $("#records").children(".record").eq(25 + randomList2[i]).children('.extra-information').children('.latitude').html();
        var long = $("#records").children(".record").eq(25 + randomList2[i]).children('.extra-information').children('.longtitude').html();
        var parkName = $("#records").children(".record").eq(25 + randomList2[i]).children('.park-title').html();
        var streetAddress = $("#records").children(".record").eq(25 + randomList2[i]).children('.street-address').html();
        var postCode = $("#records").children(".record").eq(25 + randomList2[i]).children('.post-code').html();
        var suburb = $("#records").children(".record").eq(25 + randomList2[i]).children('.suburb').html();
        var boardOfPark;
        switch (i) {
            case 0:
                boardOfPark = 3;
                break;
            case 1:
                boardOfPark = 6;
                break;
            case 2:
                boardOfPark = 14;
                break;
            case 3:
                boardOfPark = 17;
                break;
            default:
                boardOfPark = -1;
                break;
        }
        var marker = L.marker([lat, long], { icon: park }).addTo(myMap);
        popupText = "" + parkName + "<br>" +
            "This park is on Board: " + boardOfPark + "<br>" +
            "Address: " + streetAddress + "<br>" +
            "Post code: " + postCode + "<br>" +
            "Suburb: " + suburb;
        marker.bindPopup(popupText).openPopup();
    }

    // add marks of library into map
    for (var i = 0; i < randomList3.length; i++) {
        var lat = $("#libraries").children(".record").eq(randomList3[i]).children('.extra-information').children('.latitude').html();
        var long = $("#libraries").children(".record").eq(randomList3[i]).children('.extra-information').children('.longtitude').html();
        var libName = $("#libraries").children(".record").eq(randomList3[i]).children('.lib-title').html();
        var address = $("#libraries").children(".record").eq(randomList3[i]).children('.lib-address').html();
        var summery = $("#libraries").children(".record").eq(randomList3[i]).children('.lib-summery').html();
        var opentime = $("#libraries").children(".record").eq(randomList3[i]).children('.lip-open-time').html();
        var boardOfLib = i + 6;
        var marker = L.marker([lat, long], { icon: greyIcon }).addTo(myMap);
        popupText = "" + libName + "<br>" +
            "This Library is on Board: " + boardOfLib + "<br>" +
            "Address: " + address + "<br>" +
            "Summery: " + summery + "<br>" +
            "Open Time: " + opentime;
        marker.bindPopup(popupText).openPopup();
    }

    // add marks of museum into map
    for (var i = 0; i < randomList4.length; i++) {
        var lat = $("#museums").children(".record").eq(randomList4[i]).children('.museum-latitude').html();
        var long = $("#museums").children(".record").eq(randomList4[i]).children('.museum-longitude').html();
        var museumName = $("#museums").children(".record").eq(randomList4[i]).children('.museum-name').html();
        var museumArea = $("#museums").children(".record").eq(randomList4[i]).children('.museum-area').html();
        var museumType = $("#museums").children(".record").eq(randomList4[i]).children('.museum-type').html();
        var museumSummery = $("#museums").children(".record").eq(randomList4[i]).children('.museum-summery').html();
        var boardOfMuseum = i + 19;
        var marker = L.marker([lat, long], { icon: greyIcon }).addTo(myMap);
        popupText = "" + museumName + "<br>" +
            "This Museum is on Board: " + boardOfMuseum + "<br>" +
            "Located area: " + museumArea + "<br>" +
            "Type of museum: " + museumType + "<br>" +
            "Summery: " + museumSummery;
        marker.bindPopup(popupText).openPopup();
    }
}

// upload information into map
function updateInformationIntoMap(randomList, randomList2, randomList3, randomList4, playerProperty) {
    // player 1 marker
    var player1 = new L.Icon({ // bule
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // player 2 marker
    var player2 = new L.Icon({ // green
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // player 3 marker
    var player3 = new L.Icon({ // violet
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // unoccupied marker
    var greyIcon = new L.Icon({ // grey
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // park marker
    var park = new L.Icon({ // yellow
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidXFpZHJ1Z28iLCJhIjoiY2tlcDdmbDV2MDc2ZjJ4bnk5bTgwcmkwbSJ9.aiKl3J-I-lVcj0iTllZlpg", {
        // attribution: 'Map data © href="https://www.openstreetmap.org/">OpenStreetMap contributors, href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA, Imagery © href="https://www.mapbox.com/">Mapbox', 
        maxZoom: 18,
        id: 'mapbox/streets-v11', //mapbox/streets-v11    mapbox/satellite-v9     
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmFud2VuamluZyIsImEiOiJja3QwdWRwbHAwNG1mMm5sbHFiZXB3MngwIn0.0qJ9B_F2J3fd_09Y2cn-KQ',
        // your.mapbox.access.token
        // pk.eyJ1IjoibmFud2VuamluZyIsImEiOiJja3QwdWRwbHAwNG1mMm5sbHFiZXB3MngwIn0.0qJ9B_F2J3fd_09Y2cn-KQ

    }).addTo(myMap);

    // add marks of hall into map
    for (var i = 0; i < randomList.length; i++) {
        var player = getPlayerHaveGivenProperty((i + 1), playerProperty);
        var icon;
        switch (player) {
            case 0:
                icon = player1;
                break;
            case 1:
                icon = player2;
                break;
            case 2:
                icon = player3;
                break;
            case -1:
                icon = greyIcon;
                break;

        }
        if (i !== 0 && i !== 2 && i !== 5 && i !== 13 && i !== 16 && !(i >= 6 && i <= 12) && !(i >= 19 && i <= 21)) {
            var lat = $("#records").children(".record").eq(randomList[i]).children('.extra-information').children('.latitude').html();
            var long = $("#records").children(".record").eq(randomList[i]).children('.extra-information').children('.longtitude').html();
            var hallTitle = $("#records").children(".record").eq(randomList[i]).children('.hall-title').html();
            var hallIntro = $("#records").children(".record").eq(randomList[i]).children('.container').children('.hall-intro').html();
            var location = $("#records").children(".record").eq(randomList[i]).children('.location').html();

            var marker = L.marker([lat, long], { icon: icon }).addTo(myMap);
            popupText = "" + hallTitle + "<br>" +
                "This Hall is on Board: " + (i + 1) + "<br>" +
                "Introduction: " + hallIntro + "<br>" +
                "Location: " + location
            marker.bindPopup(popupText).openPopup();
        }
    }

    // add marks of park into map
    for (var i = 0; i < randomList2.length; i++) {
        var lat = $("#records").children(".record").eq(25 + randomList2[i]).children('.extra-information').children('.latitude').html();
        var long = $("#records").children(".record").eq(25 + randomList2[i]).children('.extra-information').children('.longtitude').html();
        var parkName = $("#records").children(".record").eq(25 + randomList2[i]).children('.park-title').html();
        var streetAddress = $("#records").children(".record").eq(25 + randomList2[i]).children('.street-address').html();
        var postCode = $("#records").children(".record").eq(25 + randomList2[i]).children('.post-code').html();
        var suburb = $("#records").children(".record").eq(25 + randomList2[i]).children('.suburb').html();
        var boardOfPark;
        switch (i) {
            case 0:
                boardOfPark = 3;
                break;
            case 1:
                boardOfPark = 6;
                break;
            case 2:
                boardOfPark = 14;
                break;
            case 3:
                boardOfPark = 17;
                break;
        }

        var marker = L.marker([lat, long], { icon: park }).addTo(myMap);
        popupText = "" + parkName + "<br>" +
            "This park is on Board: " + boardOfPark + "<br>" +
            "Address: " + streetAddress + "<br>" +
            "Post code: " + postCode + "<br>" +
            "Suburb: " + suburb;
        marker.bindPopup(popupText).openPopup();
    }

    // add marks of library into map
    for (var i = 0; i < randomList3.length; i++) {
        var lat = $("#libraries").children(".record").eq(randomList3[i]).children('.extra-information').children('.latitude').html();
        var long = $("#libraries").children(".record").eq(randomList3[i]).children('.extra-information').children('.longtitude').html();
        var libName = $("#libraries").children(".record").eq(randomList3[i]).children('.lib-title').html();
        var address = $("#libraries").children(".record").eq(randomList3[i]).children('.lib-address').html();
        var summery = $("#libraries").children(".record").eq(randomList3[i]).children('.lib-summery').html();
        var opentime = $("#libraries").children(".record").eq(randomList3[i]).children('.lip-open-time').html();
        var boardOfLib = i + 6;
        var marker = L.marker([lat, long], { icon: greyIcon }).addTo(myMap);
        popupText = "" + libName + "<br>" +
            "This Library is on Board: " + boardOfLib + "<br>" +
            "Address: " + address + "<br>" +
            "Summery: " + summery + "<br>" +
            "Open Time: " + opentime;
        marker.bindPopup(popupText).openPopup();
    }

    // add marks of museum into map
    for (var i = 0; i < randomList4.length; i++) {
        var lat = $("#museums").children(".record").eq(randomList4[i]).children('.museum-latitude').html();
        var long = $("#museums").children(".record").eq(randomList4[i]).children('.museum-longitude').html();
        var museumName = $("#museums").children(".record").eq(randomList4[i]).children('.museum-name').html();
        var museumArea = $("#museums").children(".record").eq(randomList4[i]).children('.museum-area').html();
        var museumType = $("#museums").children(".record").eq(randomList4[i]).children('.museum-type').html();
        var museumSummery = $("#museums").children(".record").eq(randomList4[i]).children('.museum-summery').html();
        var boardOfMuseum = i + 19;
        var marker = L.marker([lat, long], { icon: greyIcon }).addTo(myMap);
        popupText = "" + museumName + "<br>" +
            "This Museum is on Board: " + boardOfMuseum + "<br>" +
            "Located area: " + museumArea + "<br>" +
            "Type of museum: " + museumType + "<br>" +
            "Summery: " + museumSummery;
        marker.bindPopup(popupText).openPopup();
    }
}

// show the halls of winner and the map
function jumpToResult(randomList, randomList2, recordsInGame, playerInfo, playerProperty) {
    // get winner id
    var winPlayerID = 0;
    for (var i = 0; i < playerInfo.length; i++) {
        if (playerInfo[winPlayerID].stars < playerInfo[i].stars) {
            winPlayerID = i;
        }
    }

    // set some css style
    $('#winner').css({
        visibility: "hidden",
        zIndex: -50,
    })
    $('#winner-treasure').css({
        "visibility": "visible",
        zIndex: 99,
    });
    $('#map').css({
        opacity: 1,
        boxShadow: "none",
        marginLeft: "51%",
        marginTop: "-440px",
        width: "46vw",
        height: "67vh",
        zIndex: 100
    });

    // read information of winner's property
    for (var i = 0; i < playerProperty[winPlayerID].length; i++) {
        if (playerProperty[winPlayerID][i] !== null && playerProperty[winPlayerID][i] !== undefined) {
            var winnerTitle = $("#records").children(".record").eq(randomList[playerProperty[winPlayerID][i] - 1]).children('.hall-title').html();
            var winnerImg = $("#records").children(".record").eq(randomList[playerProperty[winPlayerID][i] - 1]).children('a').children('.hall-img').attr("src");
            var winnerDescribe = $("#records").children(".record").eq(randomList[playerProperty[winPlayerID][i] - 1]).children('.container').children('.hall-intro').html();
            var winnerLocation = $("#records").children(".record").eq(randomList[playerProperty[winPlayerID][i] - 1]).children('.location').html();

            $('.winner-treasures').append(
                $('<div class="winner-treasures-record">').append(
                    $('<div winner-treasure-first-box>').append('<img class="winner-treasure-img" src="' + winnerImg + '">'),
                    $('<div winner-treasure-second-box>').append(
                        $('<div class="winner-treasure-title">').text(winnerTitle),
                        $('<div class="winner-treasure-describe">').text("Describe: " + winnerDescribe),
                        $('<div class="winner-treasure-location">').text("Location: " + winnerLocation),
                    ),
                ),
            );
        }
    }
}

// return true if all of players have hit the finished round 
function checkFinishGame(finishRound, playerInfo) {
    for (let i = 0; i < playerInfo.length; i++) {
        var player = playerInfo[i];
        if (player.round !== finishRound) {
            return false;
        }
    }
    return true;
}

// get the ith record in the records
function getInfo(index) {
    if (index) {
        // console.log($("#records").children(".record").eq(index));
        return $("#records").children(".record").eq(index);
    } else {
        // return the first record if there is no index entered
        return $("#records").children(".record").eq(0);
    }
}

// get the information of park randomly
function getPark(id) {
    return $("#records").children(".record").eq(25 + parseInt(id)).html();
}

// show information of hall to the left
function showHallInformationOnLeft(data, index, randomList, randomList2, randomList3, randomList4) {
    $(".info-window-left").empty();
    if (index === 0) {
        $(".info-window-left").append('<p class="start-text">Start Position</p><img class="start-img" src="./images/start-position.jpg">');
    } else if (index === 2) {
        $(".info-window-left").append(getPark(randomList2[0]) + '<p class="good-place">Add 10 stars<p/>');
    } else if (index === 5) {
        $(".info-window-left").append(getPark(randomList2[1]) + '<p class="bad-place">Minus 5 stars<p/>');
    } else if (index === 13) {
        $(".info-window-left").append(getPark(randomList2[2]) + '<p class="bad-place">Minus 1 property<p/>');
    } else if (index === 16) {
        $(".info-window-left").append(getPark(randomList2[3]) + '<p class="bad-place">Add 5 stars to others<p/>');
    } else if (index >= 6 && index <= 12) {
        $(".info-window-left")
        .append($('<div class="hall-title">').text($('#libraries').children('.record').eq(randomList3[index - 6]).children('.lib-title').html()))
        .append($('#libraries').children('.record').eq(randomList3[index - 6]).children('a').html())
        .append(
            $('<div class="star-container">')
            .append(
                $('<div class="value-container">').append(
                    'Value: <img class="star-img" src="./images/star-prompt.png"> x5'
                ),
                $('<div class="rent-container">').append(
                    'Rent: <img class="star-img" src="./images/star-prompt.png"> x0'
                )
            )
        );
    } else if (index >= 19 && index <= 21) {
        $(".info-window-left")
        .append($('<div class="hall-title">').text($('#museums').children('.record').eq(randomList4[index - 19]).children('.museum-name').html()))
        .append($('#museums').children('.record').eq(randomList4[index - 19]).children('.museum-image').html())
        .append(
            $('<div class="star-container">')
            .append(
                $('<div class="value-container">').append(
                    'Value: <img class="star-img" src="./images/star-prompt.png"> x8'
                ),
                $('<div class="rent-container">').append(
                    'Rent: <img class="star-img" src="./images/star-prompt.png"> x0'
                )
            )
        );
    } else {
        var value = data.split("<p>")[9][0];
        var rent = data.split("<p>")[10][0];
        $(".info-window-left")
        .append($('<div class="hall-title">').text($('#records').children('.record').eq(randomList[index]).children('.hall-title').html()))
        .append(
            $('<a>').attr("href", $('#records').children('.record').eq(randomList[index]).children('a').attr("href"))
            .attr("data-lightbox", $('#records').children('.record').eq(randomList[index]).children('a').attr("href"))
            .append(
                $('<img class="lib-img">').attr("src", $('#records').children('.record').eq(randomList[index]).children('a').attr("href"))
            )
        )        
        .append(
            $('<div class="star-container">')
            .append(
                $('<div class="value-container">').append(
                    'Value: <img class="star-img" src="./images/star-prompt.png"> x' + value
                ),
                $('<div class="rent-container">').append(
                    'Rent: <img class="star-img" src="./images/star-prompt.png"> x' + rent
                )
            )
        );
    }
}

// show information of hall to the right
function showHallInformationOnRight(data, showWindow, index, randomList, randomList2, randomList3, randomList4) {
    if (showWindow) {
        // clear the previous timer
        clearTimeout(showWindow);
    }

    $(".info-window-right").empty();
    if (index === 0) {
        $(".info-window-right").append('<p class="start-text">Start Position</p><img class="start-img" src="./images/start-position.jpg">');
    } else if (index === 2) {
        $(".info-window-right").append(getPark(randomList2[0]) + '<p class="good-place">Add 10 stars<p/>');
    } else if (index === 5) {
        $(".info-window-right").append(getPark(randomList2[1]) + '<p class="bad-place">Minus 5 stars<p/>');
    } else if (index === 13) {
        $(".info-window-right").append(getPark(randomList2[2]) + '<p class="bad-place">Minus 1 property<p/>');
    } else if (index === 16) {
        $(".info-window-right").append(getPark(randomList2[3]) + '<p class="bad-place">Add 5 stars to others<p/>');
    } else if (index >= 6 && index <= 12) {
        $(".info-window-right")
        .append($('<div class="hall-title">').text($('#libraries').children('.record').eq(randomList3[index - 6]).children('.lib-title').html()))
        .append(
            $('<a>').attr("href", $('#libraries').children('.record').eq(randomList3[index - 6]).children('a').attr("href"))
            .attr("data-lightbox", $('#libraries').children('.record').eq(randomList3[index - 6]).children('a').attr("href"))
            .append(
                $('<img class="lib-img">').attr("src", $('#libraries').children('.record').eq(randomList3[index - 6]).children('a').attr("href"))
            )
        )
        .append(
            $('<article class="container">').append(
                $('<p class="hall-intro">').text(
                    $('#libraries').children('.record').eq(randomList3[index - 6]).children('.lib-summery').html()
                )
            )
        )
        .append(
            $('<p class="location">').text(
                $('#libraries').children('.record').eq(randomList3[index - 6]).children('.lib-address').html()
            )
        )
        .append(
            $('<div class="star-container">')
            .append(
                $('<div class="value-container">').append(
                    'Value: <img class="star-img" src="./images/star-prompt.png"> x5'
                ),
                $('<div class="rent-container">').append(
                    'Rent: <img class="star-img" src="./images/star-prompt.png"> x0'
                )
            )
        );
    } else if (index >= 19 && index <= 21) {
        $(".info-window-right")
        .append($('<div class="hall-title">').text($('#museums').children('.record').eq(randomList4[index - 19]).children('.museum-name').html()))
        .append(
            $('<a>').attr("href", $('#museums').children('.record').eq(randomList4[index - 19]).children('.museum-image').children('img').attr("src"))
            .attr("data-lightbox", $('#museums').children('.record').eq(randomList4[index - 19]).children('.museum-image').children('img').attr("src"))
            .append(
                $('<img class="lib-img">').attr("src", $('#museums').children('.record').eq(randomList4[index - 19]).children('.museum-image').children('img').attr("src"))
            )
        )
        .append(
            $('<article class="container">').append(
                $('<p class="hall-intro">').text(
                    $('#museums').children('.record').eq(randomList4[index - 19]).children('.museum-summery').html()
                )
            )
        )
        .append(
            $('<p class="location">').text(
                $('#museums').children('.record').eq(randomList4[index - 19]).children('.museum-location').html()
            )
        )
        .append(
            $('<div class="star-container">')
            .append(
                $('<div class="value-container">').append(
                    'Value: <img class="star-img" src="./images/star-prompt.png"> x8'
                ),
                $('<div class="rent-container">').append(
                    'Rent: <img class="star-img" src="./images/star-prompt.png"> x0'
                )
            )
        );
    } else {
        var value = data.split("<p>")[9][0];
        var rent = data.split("<p>")[10][0];
        $(".info-window-right")
        .append($('<div class="hall-title">').text($('#records').children('.record').eq(randomList[index]).children('.hall-title').html()))
        .append(
            $('<a>').attr("href", $('#records').children('.record').eq(randomList[index]).children('a').attr("href"))
            .attr("data-lightbox", $('#records').children('.record').eq(randomList[index]).children('a').attr("href"))
            .append(
                $('<img class="lib-img">').attr("src", $('#records').children('.record').eq(randomList[index]).children('a').attr("href"))
            )
        )
        .append(
            $('<article class="container">').append(
                $('<p class="hall-intro">').text(
                    $('#records').children('.record').eq(randomList[index]).children('.container').children('p').html()
                )
            )
        )
        .append(
            $('<p class="location">').text(
                $('#records').children('.record').eq(randomList[index]).children('.location').html()
            )
        )
        .append(
            $('<div class="star-container">')
            .append(
                $('<div class="value-container">').append(
                    'Value: <img class="star-img" src="./images/star-prompt.png"> x' + value
                ),
                $('<div class="rent-container">').append(
                    'Rent: <img class="star-img" src="./images/star-prompt.png"> x' + rent
                )
            )
        );
    }

    // delay method to hide window at right hand side
    showWindow = setTimeout(function() {
        $(".info-window-right").css({
            "visibility": "hidden",
            "z-index": 1
        });
    }, 4000);

    return showWindow;
}

// get the player id which own the given number of property 
function getPlayerHaveGivenProperty(newBoardID, playerProperty) {
    for (var playerProps = 0; playerProps < playerProperty.length; playerProps++) {
        for (var propNum = 0; propNum < playerProperty[playerProps].length; propNum++) {
            if (newBoardID === playerProperty[playerProps][propNum]) {
                return playerProps;
            }
        }
    }
    return -1;
}

// call if game finished
function showWinner(playerInfo) {
    var winPlayerID = 0;
    for (var i = 0; i < playerInfo.length; i++) {
        if (playerInfo[winPlayerID].stars < playerInfo[i].stars) {
            winPlayerID = i;
        }
    }
    $('#winner').children('.winner-id').html("Player " + (winPlayerID + 1));
    $('#winner').children('.winner-star').children('.winner-stars').html(playerInfo[winPlayerID].stars);
    $('#winner').children('.winner-property').children('.winner-properties').html(playerInfo[winPlayerID].props);
    $('#winner').css({
        visibility: "visible",
        zIndex: 200,
    })
}

// the action after player click on the Go button
function goButtonClicked(finishRound, recordsInGame, count, playerNum, players, playersOnBoard, playerProperty, playerInfo, randomList, randomList2, randomList3, randomList4) {
    goButtonAnimation();

    // get some imoortant info of current moving activity
    playerID = count % playerNum;
    nextPlayerID = (playerID + 1) % playerNum;
    var diceNum = Math.ceil(Math.random() * 6);

    // diceNum = 1;
    var preBoardID = playersOnBoard[playerID];
    var newBoardID = (playersOnBoard[playerID] + diceNum) % 22;

    // update prompt interaction during the game
    if (finishRound === playerInfo[playerID].round) {
        diceAnimation(0)
            // check whether the game is over
        if (checkFinishGame(finishRound, playerInfo)) {
            showWinner(playerInfo);
        }
        return;
    } else {
        diceAnimation(diceNum)
    }

    // whether the player start a new round
    var roundPlusOne = newBoardID < preBoardID ? 1 : 0;
    var roundNumber = playerInfo[playerID].round + roundPlusOne;
    playerInfo[playerID].round = roundNumber;
    $('.player-info').children().eq(playerID).children('.second-box').children('.round-info').children('.round-total').html(roundNumber);

    // if the player hit the round number, set it at start
    if (finishRound === playerInfo[playerID].round) {
        newBoardID = 0;
    }
    // update the board number that player stayed
    playersOnBoard[playerID] = newBoardID;
    var delay = (newBoardID < preBoardID ? 300 * (22 + newBoardID - preBoardID) : 300 * (newBoardID - preBoardID + 1));
    // set an animation function to show all of animate after dice number was showed
    setTimeout(function() {
        showAllAnimatesOnBoards(preBoardID, newBoardID, players, playerID, nextPlayerID);
    }, 1000)

    // is the player get here first time?
    var playerHoldProp = firstTimeComeHere(newBoardID + 1, playerProperty);
    if (playerHoldProp === null) {
        setTimeout(function() {
            if (newBoardID === 0) {
                return;
            } else if (newBoardID === 2) {
                modifyStarsAtPark(playerID, playerInfo, 10);
                return;
            } else if (newBoardID === 5) {
                modifyStarsAtPark(playerID, playerInfo, -5);
                return;
            } else if (newBoardID === 13) {
                withdrawProperty(playerID, playerProperty, playerInfo);
                return;
            } else if (newBoardID === 16) {
                addStarsToOthers(playerID, playerInfo);
                return;
            } else if (newBoardID >= 6 && newBoardID <= 12) {
                onLibrary(newBoardID, randomList3, playerInfo)
                return;
            } else if (newBoardID >= 19 && newBoardID <= 21) {
                onMuseum(newBoardID, randomList4, playerInfo)
                return;
            } else {
                // answer question to get hall
                onHall(playerID, playerProperty, playerInfo, recordsInGame, newBoardID, randomList, randomList2, randomList3, randomList4);
            }
        }, 2000 + delay)
    } else {
        var rentStar = recordsInGame[newBoardID].Rent;
        setTimeout(function() {
            tradeStar(playerID, playerHoldProp, playerInfo, rentStar);
        }, 2000 + delay)
    }
}

//judge the answer
function judgeAnswer(boardID,questionList) {
    var userChoice = document.getElementsByName("choices");
    for(var i = 0; i < 4; i++){
        if(userChoice[i].checked){
            console.log("Current ID: "+boardID)
            // console.log("Current Answer: "+libraryQuestions[boardID].answer)
            console.log("Answer of user: "+userChoice[i].value)
            if(userChoice[i].value == questionList[boardID].answer){
                // console.log(userChoice[i].value)
                // console.log(boardID)
                // console.log(questions[boardID].answer)
                $(".celebrate-page").fadeIn(1000)
                return;
            }else{
                // console.log(userChoice[i].value)
                // console.log(boardID)
                // console.log(questions[boardID].answer)
                $(".fail-page").fadeIn(1000)
                return;
            }
        }
    }
}

function onLibrary(newBoardID, randomList3, playerInfo) {
    var qh = document.querySelector('#question-home');
    var mask = document.querySelector('.login-bg');
    qh.style.display = 'block';
    mask.style.display = 'block';
    var library = document.querySelector('#libraries')
    var libraryTitle = document.querySelector('.lib-title');
    // console.log(libraryTitle.innerHTML)
    // console.log(randomList3)
    var currentLibraryNum = newBoardID - 6;
    var currentLibrary = library.children[currentLibraryNum];
    // console.log(currentLibrary)
    var libraryTitle = currentLibrary.children[0].innerHTML;
    var libraryPicture = currentLibrary.children[1].getAttribute('href')
    var libraryAddress = currentLibrary.children[2].innerHTML;
    var librarySummary = currentLibrary.children[3].innerHTML;
    var libraryPhone = currentLibrary.children[5].innerHTML;
    var libraryOpen = currentLibrary.children[6].innerHTML;
    var questionTitle = document.querySelector(".question-title")
    var title1 = document.querySelector('#title');
    var title2 = document.querySelector('#title2');
    var qp = document.querySelectorAll(".hall-picture");
    var iqt = document.querySelector(".info-question-text");
    var qt = document.querySelectorAll(".question-text");
    var starIcon = document.querySelectorAll(".star-icon");
    var starValue = document.querySelector(".hall-value");
    var starRent = document.querySelector(".hall-rent");
    var qpr = document.querySelector(".question-prize")
    var phonePic = "https://img.icons8.com/material-sharp/24/000000/phone.png";

    //clean
    for (let index = 0; index < qp.length; index++) {
        qp[index].innerHTML = "";
    }
    // clean front of text
    for (let index = 0; index < qt.length; index++) {
        qt[index].innerHTML = "";
    }
    iqt.innerHTML="";
    //clean the value
    starValue.innerHTML="";

    //clean the rent 
    starRent.innerHTML="";

    //clean the question title
    questionTitle.innerHTML="";

    title1.innerHTML = "";
    title2.innerHTML = "";

    //clean the question-prize
    qpr.innerHTML = "";
   

    //insert titles
    $(function(){
        $("#title").append(
            $('<h4>').text('Brisbane Library')
        ).css({"margin-left": "25%"})
    })
    $(function(){
        $("#title2").append(
            $('<h4>').text('Brisbane Library')
        ).css({"margin-left": "25%"})
    })

    // insert picture
    $(function(){
        $(".hall-picture").append(
            $('<img>').attr("src", libraryPicture).css("width",300).css("height",260)
        )
    })

    //insert title
    $(function(){
        $(".question-text").append(
            $('<h5>').text(libraryTitle)
        )
    })

    //insert address
    $(function(){
        $(".question-text").append(
            $('<h7>').text(libraryAddress).css({"font-weight":100, "font-size": "15px"})
        )
    })

    //insert summary
    $(function(){
        $(".info-question-text").append(
            $('<h5>').text(librarySummary)
        )
    })
    //insert /br
    $(function(){
        $(".info-question-text").append(
            $('<br>')
        )
    })
    //insert opentime
    $(function(){
        $(".info-question-text").append(
            $('<h5>').text(libraryOpen)
        )
    })

    $(function(){
        $(".star-icon").append(
            $('<img>').attr("src",phonePic).css("height",20).css("width",20)
        )
    })
    //insert phone
    $(function(){
        $(".star-icon").append(
            $('<h5>').text(libraryPhone)
        )
    })

    //insert value
    $(function(){
        $(".hall-value").append(
            $('<h5>').text("X "+5)
        )
    })
    //insert rent
    $(function(){
        $(".hall-rent").append(
            $('<h5>').text("X "+0)
        )
    })

    //insert question prize
    $(function(){
        $(".question-prize").append(
            $('<strong>').text("Nice!! You got 5 stars!")
        )
    })

    // question part
    var userChoices = document.getElementsByTagName('input[type:radio]');
    var question = libraryQuestions[currentLibraryNum].question;
    questionTitle.innerHTML = question;
    var opLabel = document.querySelectorAll(".op-label")
    var options = libraryQuestions[currentLibraryNum].choices;
        for ( var opt in options ) {
           for ( var radios in userChoices ) {
             userChoices[radios].value = options[opt];
             opLabel[opt].innerHTML=options[opt];
           }
        }
    console.log("Current index of question: "+currentLibraryNum);
    console.log("Correct Answer -> "+libraryQuestions[currentLibraryNum].answer);
    var cleanChoice = document.getElementsByName("choices");
    $.each(cleanChoice,function(i,v){
        v.checked = false;
        v.removeAttribute("checked");
    })


    $(function(){
        $("#read").click(function(){
            $(".question-home-page").fadeOut(300,function(){
                $(".info-readMore").fadeIn(1000)
            })
        })
    })
    $(function(){
        $(".start").click(function(){
            $(".question-home-page").fadeOut(300,function(){
                $(".question-page").fadeIn(1000)
            })
        })
    })
    $(function(){
        $("#back").click(function(){
            $(".info-readMore").fadeOut(300,function(){
                $(".question-home-page").fadeIn(1000)
            })
        })
    })
   
    $("#GO").unbind('click').click(function(){
        judgeAnswer(currentLibraryNum,libraryQuestions);
    })


    $("#continue-success").unbind('click').click(function(){ // in library
        $(".celebrate-page").fadeOut(300)
        $(".question-page").hide()
        $(".login-bg").hide()
        $(".info-readMore").hide()
        for (let index = 0; index < starIcon.length; index++) {
            starIcon[index].innerHTML = "";
        }

        // if (newBoardID == 1 || newBoardID == 3 || newBoardID == 4 || newBoardID == 14 || newBoardID == 15 || newBoardID == 18 || newBoardID == 19 ) {
        //     // recall by answer question function
        //     addPropertyToPlayer(playerID, playerProperty, playerInfo, newBoardID, recordsInGame);
        //     updateInformationIntoMap(randomList, randomList2, randomList3, randomList4, playerProperty)
        // } 
        if (newBoardID >= 6 && newBoardID <= 12) {
            // modifyStarsAtPark(playerID, playerInfo, 5)
            modifyStars(playerID, playerInfo, 5)
        } 
        // else if (newBoardID >= 19 && newBoardID <= 21) {
        //     modifyStarsAtPark(playerID, playerInfo, 8)
        // }
    })

    $("#continue-fail").click(function(){
        $(".fail-page").fadeOut(300)
        $(".question-page").hide()
        $(".info-readMore").hide()
        $(".login-bg").hide()
        $(".celebrate-page").hide()
        for (let index = 0; index < starIcon.length; index++) {
            starIcon[index].innerHTML = "";
        }
    })
    
}

function onMuseum(newBoardID, randomList4, playerInfo) {
    var qh = document.querySelector('#question-home');
    var mask = document.querySelector('.login-bg');
    qh.style.display = 'block';
    mask.style.display = 'block';
    // console.log(randomList4)
    var museumNum = newBoardID - 19;
    var currentMuseumNum = randomList4[museumNum];
    var allMuseums = document.querySelector('#museums');
    var currentMuseum = allMuseums.children[currentMuseumNum];
    var museumName = currentMuseum.children[0].innerHTML;
    var museumLoaction = currentMuseum.children[1].innerHTML;
    var museumArea = currentMuseum.children[2].innerHTML;
    var museumType = currentMuseum.children[5].innerHTML;
    var museumSum = currentMuseum.children[6].innerHTML;
    var museumPic = currentMuseum.children[7].children[0].getAttribute('src');
    var questionTitle = document.querySelector(".question-title")

    var title1 = document.querySelector('#title');
    var title2 = document.querySelector('#title2');
    var qp = document.querySelectorAll(".hall-picture");
    var qt = document.querySelectorAll(".question-text");
    var starIcon = document.querySelectorAll(".star-icon");
    var starValue = document.querySelector(".hall-value");
    var starRent = document.querySelector(".hall-rent");
    var iqt = document.querySelector(".info-question-text");
    var qpr = document.querySelector(".question-prize")

    //clean
    for (let index = 0; index < qp.length; index++) {
        qp[index].innerHTML = "";
    }
    // clean front of text
    for (let index = 0; index < qt.length; index++) {
        qt[index].innerHTML = "";
    }
    iqt.innerHTML="";
    //clean the value
    starValue.innerHTML="";

    //clean the rent 
    starRent.innerHTML="";

    //clean the question title
    questionTitle.innerHTML="";

    title1.innerHTML = "";
    title2.innerHTML = "";
   
    //clean the question-prize
    qpr.innerHTML = "";

    //insert titles
    $(function(){
        $("#title").append(
            $('<h4>').text('Brisbane Museum')
        ).css({"margin-left": "25%"})
    })
    $(function(){
        $("#title2").append(
            $('<h4>').text('Brisbane Museum')
        ).css({"margin-left": "25%"})
    })

    // insert picture
    $(function(){
        $(".hall-picture").append(
            $('<img>').attr("src", museumPic).css("width",300).css("height",260)
        )
    })

    //insert title
    $(function(){
        $(".question-text").append(
            $('<h5>').text(museumName)
        )
    })

    //insert address
    $(function(){
        $(".question-text").append(
            $('<h7>').text(museumLoaction).css({"font-weight":100, "font-size": "15px"})
        )
    })

    //insert type
    $(function(){
        $(".info-question-text").append(
            $('<h4>').text(museumType).css("text-align","center")
        )
    })
    //insert /br
    $(function(){
        $(".info-question-text").append(
            $('<br>')
        )
    })
    //insert area
    $(function(){
        $(".info-question-text").append(
            $('<h5>').text(museumArea)
        )
    })
    //insert /br
    $(function(){
        $(".info-question-text").append(
            $('<br>')
        )
    })
    //insert Summary
    $(function(){
        $(".info-question-text").append(
            $('<h5>').text(museumSum)
        )
    })


    //insert value
    $(function(){
        $(".hall-value").append(
            $('<h5>').text("X "+5)
        )
    })
    //insert rent
    $(function(){
        $(".hall-rent").append(
            $('<h5>').text("X "+0)
        )
    })

    //insert the question prize
    $(function(){
        $(".question-prize").append(
            $('<strong>').text("Nice!! You got 8 stars!")
        )
    })

    // question part
    var userChoices = document.getElementsByTagName('input[type:radio]');
    var question = museumQuestions[currentMuseumNum].question;
    questionTitle.innerHTML = question;
    var opLabel = document.querySelectorAll(".op-label")
    var options = museumQuestions[currentMuseumNum].choices;
        for ( var opt in options ) {
           for ( var radios in userChoices ) {
             userChoices[radios].value = options[opt];
             opLabel[opt].innerHTML=options[opt];
           }
        }
    console.log("Current index of question: "+currentMuseumNum);
    console.log("Correct answer -> "+museumQuestions[currentMuseumNum].answer);
    var cleanChoice = document.getElementsByName("choices");
    $.each(cleanChoice,function(i,v){
        v.checked = false;
        v.removeAttribute("checked");
    })


    $(function(){
        $("#read").click(function(){
            $(".question-home-page").fadeOut(300,function(){
                $(".info-readMore").fadeIn(1000)
            })
        })
    })
    $(function(){
        $(".start").click(function(){
            $(".question-home-page").fadeOut(300,function(){
                $(".question-page").fadeIn(1000)
            })
        })
    })
    $(function(){
        $("#back").click(function(){
            $(".info-readMore").fadeOut(300,function(){
                $(".question-home-page").fadeIn(1000)
            })
        })
    })
   
    $("#GO").unbind('click').click(function(){
        judgeAnswer(currentMuseumNum,museumQuestions);
    })


    $("#continue-success").unbind('click').click(function(){ // in museum
        $(".celebrate-page").fadeOut(300)
        $(".question-page").hide()
        $(".login-bg").hide()
        $(".info-readMore").hide()
        for (let index = 0; index < starIcon.length; index++) {
            starIcon[index].innerHTML = "";
        }
        
        // if (newBoardID == 1 || newBoardID == 3 || newBoardID == 4 || newBoardID == 14 || newBoardID == 15 || newBoardID == 18 || newBoardID == 19 ) {
        //     // recall by answer question function
        //     addPropertyToPlayer(playerID, playerProperty, playerInfo, newBoardID, recordsInGame);
        //     updateInformationIntoMap(randomList, randomList2, randomList3, randomList4, playerProperty)
        // } else if (newBoardID >= 6 && newBoardID <= 12) {
        //     modifyStarsAtPark(playerID, playerInfo, 5)
        // } 
        if (newBoardID >= 19 && newBoardID <= 21) {
            // modifyStarsAtPark(playerID, playerInfo, 8)
            modifyStars(playerID, playerInfo, 8)
        }
    })

    $("#continue-fail").click(function(){
        $(".fail-page").fadeOut(300)
        $(".question-page").hide()
        $(".info-readMore").hide()
        $(".login-bg").hide()
        $(".celebrate-page").hide()
        for (let index = 0; index < starIcon.length; index++) {
            starIcon[index].innerHTML = "";
        }
    })

}

// the actions when player move to a new board and play games
function onHall(playerID, playerProperty, playerInfo, recordsInGame, newBoardID, randomList, randomList2, randomList3, randomList4) {
    var qh = document.querySelector('#question-home');
    var mask = document.querySelector('.login-bg');
    qh.style.display = 'block';
    mask.style.display = 'block';

    var hallTitle = recordsInGame[newBoardID].title;
    var hallPic = recordsInGame[newBoardID].img;
    var halldes = recordsInGame[newBoardID].describe;
    var hallLoc = recordsInGame[newBoardID].location;
    var hallValue = recordsInGame[newBoardID].Value;
    var hallRent = recordsInGame[newBoardID].Rent;
    var questionTitle = document.querySelector(".question-title")
    var title1 = document.querySelector('#title');
    var title2 = document.querySelector('#title2');
    var qp = document.querySelectorAll(".hall-picture");
    var qt = document.querySelectorAll(".question-text");
    var starIcon = document.querySelectorAll(".star-icon");
    var starValue = document.querySelector(".hall-value");
    var starRent = document.querySelector(".hall-rent");
    var iqt = document.querySelector(".info-question-text");
    var qpr = document.querySelector(".question-prize");

    //clean
    for (let index = 0; index < qp.length; index++) {
        qp[index].innerHTML = "";
    }
    // clean front of text
    for (let index = 0; index < qt.length; index++) {
        qt[index].innerHTML = "";
    }
    iqt.innerHTML="";
    //clean the value
    starValue.innerHTML="";

    //clean the rent 
    starRent.innerHTML="";

    //clean the question title
    questionTitle.innerHTML="";

    title1.innerHTML = "";
    title2.innerHTML = "";

    qpr.innerHTML = "";

    //insert titles
    $(function(){
        $("#title").append(
            $('<h4>').text('Brisbane Community Hall')
        ).css({"margin-left": "17%"})
    })
    $(function(){
        $("#title2").append(
            $('<h4>').text('Brisbane Community Hall')
        ).css({"margin-left": "17%"})
    })

    // insert picture
    $(function(){
        $(".hall-picture").append(
            $('<img>').attr("src", hallPic).css("width",300).css("height",260)
        )
    })

    //insert title
    $(function(){
        $(".question-text").append(
            $('<h5>').text(hallTitle)
        )
    })

    //insert address
    $(function(){
        $(".question-text").append(
            $('<h7>').text(hallLoc).css({"font-weight":100, "font-size": "15px"})
        )
    })

    //insert descrtion
    $(function(){
        $(".info-question-text").append(
            $('<h5>').text(halldes)
        )
    })

    //insert value
    $(function(){
        $(".hall-value").append(
            $('<h5>').text("X "+hallValue)
        )
    })
    //insert rent
    $(function(){
        $(".hall-rent").append(
            $('<h5>').text("X "+hallRent)
        )
    })

    //insert question prize
    $(function(){
        $(".question-prize").append(
            $('<strong>').text("That's great! The building is yours!")
        )
    })

    // question part
    var userChoices = document.getElementsByTagName('input[type:radio]');
    var question = hallQuestions[newBoardID].question;
    questionTitle.innerHTML = question;
    var opLabel = document.querySelectorAll(".op-label")
    var options = hallQuestions[newBoardID].choices;
        for ( var opt in options ) {
           for ( var radios in userChoices ) {
             userChoices[radios].value = options[opt];
             opLabel[opt].innerHTML=options[opt];
           }
        }
    console.log("Current index of question: "+newBoardID);
    console.log("Correct Answer -> "+hallQuestions[newBoardID].answer);
    var cleanChoice = document.getElementsByName("choices");
    $.each(cleanChoice,function(i,v){
        v.checked = false;
        v.removeAttribute("checked");
    })


    $(function(){
        $("#read").click(function(){
            $(".question-home-page").fadeOut(300,function(){
                $(".info-readMore").fadeIn(1000)
            })
        })
    })
    $(function(){
        $(".start").click(function(){
            $(".question-home-page").fadeOut(300,function(){
                $(".question-page").fadeIn(1000)
            })
        })
    })
    $(function(){
        $("#back").click(function(){
            $(".info-readMore").fadeOut(300,function(){
                $(".question-home-page").fadeIn(1000)
            })
        })
    })
   
    $("#GO").unbind('click').click(function(){
        judgeAnswer(newBoardID,hallQuestions)
    })


    $("#continue-success").unbind('click').click(function(){ // in hall
        $(".celebrate-page").fadeOut(300)
        $(".question-page").hide()
        $(".login-bg").hide()
        $(".info-readMore").hide()

        if (newBoardID == 1 || newBoardID == 3 || newBoardID == 4 || newBoardID == 14 || newBoardID == 15 || newBoardID == 18 || newBoardID == 19 ) {
            // recall by answer question function
            addPropertyToPlayer(playerID, playerProperty, playerInfo, newBoardID, recordsInGame);
            updateInformationIntoMap(randomList, randomList2, randomList3, randomList4, playerProperty)
        } 
        // else if (newBoardID >= 6 && newBoardID <= 12) {
        //     modifyStarsAtPark(playerID, playerInfo, 5)
        // } else if (newBoardID >= 19 && newBoardID <= 21) {
        //     modifyStarsAtPark(playerID, playerInfo, 8)
        // }
    })

    $("#continue-fail").click(function(){
        $(".fail-page").fadeOut(300)
        $(".question-page").hide()
        $(".info-readMore").hide()
        $(".login-bg").hide()
        $(".celebrate-page").hide()
    })
    

}

$(function() {
    // mark the start time of open this page
    var startTime = new Date().getDate();

    // the number of player in the game
    const playerNum = parseInt(getPlayerNumber());

    // show the player at the player status bar
    initialisePlayers(playerNum)

    // this is the setTimeOut time
    var showWindow;

    // initialise four random list to randomly dataset in the game
    var randomList = getRandomList();
    var randomList2 = getRandomList2();
    var randomList3 = getRandomList3();
    var randomList4 = getRandomList4();

    // using ajax to request halls dataset
    var data = {
        resource_id: '31b0c6e9-2f13-4cc6-9b35-45a8d08c1b8f', // the resource id
        limit: 25, // get 25 results
    };
    $.ajax({
        url: 'https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search',
        data: data,
        dataType: 'jsonp',
        cache: true,
        success: function(data) {
            // localStorage.setItem("slqData", JSON.stringify(data));
            iterateHalls(data, startTime);
            // console.log(localStorage.getItem("slqData")); 
        }
    });

    // using ajax to request librarys dataset
    var data = {
        resource_id: '0f223803-897b-46e3-8fbb-930ad1925673', // the resource id
        limit: 15, // get 15 results
    };
    $.ajax({
        url: 'https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search',
        data: data,
        dataType: 'jsonp',
        cache: true,
        success: function(data) {
            iterateLibraries(data)
        }
    });

    // ajax to get park information and upload info into map
    var data = {
        resource_id: '2c8d124c-81c6-409d-bffb-5761d10299fe', // the resource id
        limit: 10, // get 10 results
    };
    $.ajax({
        url: 'https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search',
        data: data,
        dataType: 'jsonp',
        cache: true,
        success: function(data) {
            setTimeout(function() {
                iterateParks(data);
                mapInformationIntoMap(randomList, randomList2, randomList3, randomList4);
            }, 1000)
        }
    });

    // the numebr of round in the game
    const finishRound = 3;
    $('.round-num').append(
        $('<div class="round-prompt-container">').append(
            $('<div class="round-text">').text("Total game rounds: "),
            $('<div class="round-number">').append(
                $('<i class="uil uil-sync bigger"></i>'),
                $('<p class="bigger-text">').text((finishRound - 1)),
            ),
        )
    )

    // facilities in the game
    var recordsInGame = new Array(22);

    // a integer to get the amount of go button clicked
    var playTimes = 0;

    // a list of player component in the game
    var players = new Array(playerNum);
    // a list to store the position of each player (board id)
    var playersOnBoard = new Array(playerNum);
    // initialize the players on the screen
    for (var i = 0; i < players.length; i++) {
        $("body").append(
            $('<div class="chess player-' + i + '-icon"></div>').append(
                $('<img class="chess-img player-' + i + '-img" src="./images/chess-1' + i + '.png" width="55"></i>')
            )
        );
        players[i] = $('.player-' + i + '-icon');
        playersOnBoard[i] = 0;
    }
    initialChessOnWaiting(players);

    // a list to store the properties of each player
    var playerProperty = new Array(playerNum);
    var playerInfo = new Array(playerNum);
    for (let i = 0; i < playerNum; i++) {
        playerProperty[i] = new Array(22);
        var obj = {};
        obj.stars = $('.player-info').children().eq(i).children('.second-box').children('.money-info').children('p').html();
        obj.props = $('.player-info').children().eq(i).children('.second-box').children('.house-info').children('p').html();
        obj.round = 1;
        playerInfo[i] = obj;
    }

    // get information of halls after they were got
    setTimeout(function() {
        initialisePropertyInformation(recordsInGame, randomList);
    }, 1000)


    // go button clicked
    $('.go-button').click(function() {
        goButtonClicked(finishRound, recordsInGame, playTimes, playerNum, players, playersOnBoard, playerProperty, playerInfo, randomList, randomList2, randomList3, randomList4);
        playTimes++;
    })

    // when the mouse hover on the board, 
    // show the information on left hand side
    $('.board-link').mouseover(function() {
        $(".info-window-left").css({
            "visibility": "visible",
            "z-index": 100
        });
        showHallInformationOnLeft(getInfo(randomList[$(this).index()]).html(), $(this).index(), randomList, randomList2, randomList3, randomList4)
    })

    // when the mouse leave the board, 
    // hide the information on left hand side
    $('.board-link').mouseout(function() {
        $(".info-window-left").css({
            "visibility": "hidden",
            "z-index": 1
        });
    })

    // when the mouse click on the board,
    // show the information on the right hand side
    $('.board-link').click(function() {
        $(".info-window-right").css({
            "visibility": "visible",
            "z-index": 100
        });
        showWindow = showHallInformationOnRight(getInfo(randomList[$(this).index()]).html(), showWindow, $(this).index(), randomList, randomList2, randomList3, randomList4)
    })

    $('.game-introduction').click(function() {
        $('#game-intro-box').animate({"zIndex": 101, "opacity": "1"}, 200);
        setTimeout(() => {
            $('#game-intro-box').animate({"zIndex": -10, "opacity": "0"}, 100);
        }, 4000);
    })

    // show halls and parks during this game
    $('#map-button').click(function() {
        $('#map').animate({ "zIndex": 100 }, 100);
        $('#map-lagend').animate({"zIndex": 101, "opacity": "1"}, 500)
        $('#map').animate({ "opacity": "1" }, 500);
        $('#map').css({ boxShadow: "0 0 100px 100px rgba(0, 0, 0, 0.5)" })
        $('.uil-times-circle').animate({ "opacity": "1", "zIndex": 100 }, 300)
    })

    // close map window
    $('.uil-times-circle').click(function() {
        $('#map-lagend').animate({"zIndex": -5, "opacity": "0"}, 100)
        $('#map').animate({ opacity: "0", "zIndex": -10 }, 600)
        $('.uil-times-circle').animate({ opacity: "0", "zIndex": -10 }, 600)
    })

    // show the result of game
    $('.see-result').click(function() {
        jumpToResult(randomList, randomList2, recordsInGame, playerInfo, playerProperty);
    })
})



// question lists
var libraryQuestions = 
      [
        {
          question: "Which of the following hours is the opening time of the library?",
          choices: ["Monday:4pm", "Wednesday:10pm", "Saturday:5pm", "Sunday:1pm"],
          answer: 0,
          box:1
        },
        
        {
          question: "Which one is the library phone number?",
          choices: ["04 0602 1179", "04 1568 0822", "04 2179 6186", "07 3407 1940"],
          answer: 3,
          box:2
        },

        {
          question: "Which is the address of the library?",
          choices: ["363 Adelaide st", "284 St Vincents Rd", "2805 coopers plains", "400 NewMarket"],
          answer: 1,
          box:3
        },
        {
            question: "What does the library have to offer?",
            choices: ["wheelchair", "oven", "bicycle", "count"],
            answer: 0,
            box:4
        },
        {
            question: "Which of the following hours is the opening time of the library?",
            choices: ["Tuesday:7pm", "Wednesday:8am", "Saturday:3pm", "Sunday:4pm"],
            answer: 2,
            box:5
        },
        {
            question: "Which one is the library phone number?",
            choices: ["04 8382 6782", "07 3213 4986", "07 8934 3819", "07 3407 8223"],
            answer: 3,
            box:6
        },
        {
            question: "Which is the address of the library?",
            choices: ["266 George St, Brisbane City", "Cnr Mayfield Rd & Nyrang St, Carina", "450 Ipswich Rd, Annerley", "87 Amarina Ave, Ashgrove"],
            answer: 1,
            box:7
        },
        {
            question: "What does the library have to offer?",
            choices: ["balcony", "childrens lounges", "garage", "shower room"],
            answer: 1,
            box:8
        },
        {
            question: "What language books are not in the library?",
            choices: ["Chinese", "Italian", "Punjabi", "Spanish"],
            answer: 3,
            box:9
        },
        {
            question: "Which one is the library phone number?",
            choices: ["07 2387 4509", "07 3403 1530", "07 1029 4560", "07 4590 3528"],
            answer: 1,
            box:10
        },
        {
            question: "Which of the following hours is the opening time of the library?",
            choices: ["Tuesday:1pm", "Monday:1pm", "Friday:9am", "Sunday:10am"],
            answer: 0,
            box:11
        },
        {
            question: "Which is the address of the library?",
            choices: ["Fairfield Gardens Shopping Centre", "Garden City Shopping Centre, Level R4", "561 South Pine Road, Everton Park", "79 Evelyn St, Grange"],
            answer: 2,
            box:12
        },
        {
            question: "Which one is the library phone number?",
            choices: ["07 3542 1847", "07 9584 3749", "07 4578 2913", "07 3403 8615"],
            answer: 3,
            box:13
        },
        {
            question: "What language books are not in the library?",
            choices: ["Japanese", "Hindi", "Arabic", "Korean"],
            answer: 0,
            box:14
        },
        {
            question: "What rooms are available in the library?",
            choices: ["Kitchen", "Children room", "The lounge", "meeting rooms"],
            answer: 3,
            box:15
        }
      ];
var hallQuestions = 
[
    {
      question: "What street is the building on?",
      choices: ["13 Coley Street", "363 Adelaide Street", "127 Charlotte Street", "70 Victoria street"],
      answer: 0,
      box:1
    },
    
    {
      question: "What's the name of the room next to this building?",
      choices: ["Chemical", "Smith", "Miami", "Jupiter"],
      answer: 3,
      box:2
    },

    {
      question: "What's the infrastructure of the building?",
      choices: ["Provide baby toilets", "There's a fridge, a kitchen", "No oven", "No water heater"],
      answer: 1,
      box:3
    },
    {
        question: "What's the zip code of the building?",
        choices: ["4077", "4000", "4010", "4022"],
        answer: 0,
        box:4
    },
    {
        question: "What street is the building on?",
        choices: ["13 Coley Street", "363 Adelaide Street", "Corner Lister and Gager Streets", "70 Victoria street"],
        answer: 2,
        box:5
    },
    {
        question: "What Road is the building on?",
        choices: ["177 Oxley Road", "Comer Road", "77 Bracken Road", "187 Wilston Road"],
        answer: 3,
        box:6
    },
    {
        question: "What's near this building?",
        choices: ["Restaurant", "Library", "Cinema", "Hotel"],
        answer: 1,
        box:7
    },
    {
        question: "What's the rent of this building?",
        choices: ["2", "3", "4", "5"],
        answer: 1,
        box:8
    },
    {
        question: "What Road is the building on?",
        choices: ["177 Oxley Road", "Comer Road", "77 Bracken Road", "187 Wilston Road, Newmarket"],
        answer: 3,
        box:9
    },
    {
        question: "What's the zip code of the building?",
        choices: ["4100", "4105", "4000", "4010"],
        answer: 1,
        box:10
    },
    {
        question: "What's the style of this building?",
        choices: ["Old", "New", "Chinese style", "Europe type"],
        answer: 0,
        box:11
    },
    {
        question: "What are the walls of the building made of?",
        choices: ["Cement", "Ceramic tile", "Brick", "Soil"],
        answer: 2,
        box:12
    },
    {
        question: "which part of Brisbane is the building locate?",
        choices: ["Newmarket", "Toowong", "City", "Sunnybank"],
        answer: 3,
        box:13
    },
    {
        question: "What's the rent of this building?",
        choices: ["1", "2", "4", "3"],
        answer: 0,
        box:14
    },
    {
        question: "What's the rent of this building?",
        choices: ["1", "2", "4", "3"],
        answer: 3,
        box:15
    },
    {
        question: "What are the floor in this building made of?",
        choices: ["Brick", "Plastic", "Timber", "Cement"],
        answer: 2,
        box:16
    },
    {
        question: "What's near this building?",
        choices: ["The restaurant", "The pub", "Internet cafes", "Bowls club"],
        answer: 3,
        box:17
    },
    {
        question: "Which road is near the building?",
        choices: ["Gager Street", "Sandgate Road", "Bracken Road", "Wilston Road"],
        answer: 0,
        box:18
    },
    {
        question: "which part of Brisbane is the building locate?",
        choices: ["Southbank", "Toombul", "City", "Toowong"],
        answer: 1,
        box:19
    },
    {
        question: "What part of the building has a large area?",
        choices: ["Kitchen", "Toilet", "Bedroom", "Meeting room"],
        answer: 3,
        box:20
    },
    {
        question: "What's the zip code of the building?",
        choices: ["4055", "4000", "4015", "4550"],
        answer: 0,
        box:21
    },
    {
        question: "What's the zip code of the building?",
        choices: ["4055", "4000", "4015", "4077"],
        answer: 3,
        box:22
    },
    
  ];
var museumQuestions = 
[
    {
      question: "What is the address of the museum?",
      choices: ["Dutton Park", "Windsor", "Brookfield", "Woolloongabba"],
      answer: 0,
      box:1
    },
    
    {
      question: "What's the type of this museum?",
      choices: ["Medical", "Local history", "Prison", "Natural history"],
      answer: 3,
      box:2
    },

    {
      question: "What area is the museum in?",
      choices: ["Brisbane Suburbs South", "Brisbane Suburbs North", "Brisbane central", "west of Brisbane"],
      answer: 1,
      box:3
    },
    {
        question: "What are the characteristics of museums?",
        choices: ["Cheap tickets", "The old building", "Good snacks", "Very tall building"],
        answer: 1,
        box:3
      },
    {
        question: "What is the address of the museum?",
        choices: ["Dutton Park", "Windsor", "Woolloongabba","Brookfield"],
        answer: 2,
        box:5
    },
    {
        question: "What is the museum most likely to display?",
        choices: ["Gun", "Toy model", "painting", "Works of art"],
        answer: 0,
        box:4
    },
    {
        question: "What is the earliest period of Brisbane displayed in the museum?",
        choices: ["1890s", "1860s", "1830s", "1820s"],
        answer: 3,
        box:6
    }
]