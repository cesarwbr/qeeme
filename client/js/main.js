var loadCanvas = function() {
    var person1 = {
        name: 'Barack Obama',
        notable: 'US President',
        properties: {
            image: '/m/059x99z',
            age: 31,
            dateOfBirth: '27 August 1983',
            placeOfBirth: {
                name: 'Honolulu',
                map: 'http://maps.google.com/',
                type: 'map'
            },
            nationality: 'American',
            family: {
                parents: [{
                    name: 'Father',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'male'
                }, {
                    name: 'Mother',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }],
                children: [{
                    name: 'Child 1',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }]
            },
            education: {
                name: 'School name',
                map: 'http://maps.google.com',
                type: 'map'
            },
            profession: 'US President',
            living_in: {
                name: 'Washington, US',
                map: 'http://maps.google.com',
                type: 'map'
            }
        }
    };

    var person2 = {
        name: 'Katy Perry',
        notable: 'Dance-pop Artist',
        properties: {
            image: '/m/05mcv9y',
            age: 31,
            dateOfBirth: '08/27/1983',
            placeOfBirth: {
                name: 'Honolulu',
                map: 'http://maps.google.com/',
                type: 'map'
            },
            nationality: 'American',
            family: {
                parents: [{
                    name: 'Father',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'male'
                }, {
                    name: 'Mother',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }],
                children: [{
                    name: 'Child 1',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }]
            },
            education: {
                name: 'School name',
                map: 'http://maps.google.com',
                type: 'map'
            },
            profession: 'US President',
            living_in: {
                name: 'United States',
                map: 'http://maps.google.com',
                type: 'map'
            }
        }
    };

    var person3 = {
        name: 'Jennifer Aniston',
        notable: 'Actor',
        properties: {
            image: '/m/052x6yr',
            age: 31,
            dateOfBirth: '08/27/1983',
            placeOfBirth: {
                name: 'Honolulu',
                map: 'http://maps.google.com/',
                type: 'map'
            },
            nationality: 'American',
            family: {
                parents: [{
                    name: 'Father',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'male'
                }, {
                    name: 'Mother',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }],
                children: [{
                    name: 'Child 1',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }]
            },
            education: {
                name: 'School name',
                map: 'http://maps.google.com',
                type: 'map'
            },
            profession: 'US President',
            living_in: {
                name: 'United States',
                map: 'http://maps.google.com',
                type: 'map'
            }
        }
    };

    var person4 = {
        name: 'Beyoncé Knowles',
        notable: 'Dance-pop Artist',
        properties: {
            image: '/m/0c5l3sf',
            age: 31,
            dateOfBirth: '08/27/1983',
            placeOfBirth: {
                name: 'Honolulu',
                map: 'http://maps.google.com/',
                type: 'map'
            },
            nationality: 'American',
            family: {
                parents: [{
                    name: 'Father',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'male'
                }, {
                    name: 'Mother',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }],
                children: [{
                    name: 'Child 1',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }]
            },
            education: {
                name: 'School name',
                map: 'http://maps.google.com',
                type: 'map'
            },
            profession: 'US President',
            living_in: {
                name: 'United States',
                map: 'http://maps.google.com',
                type: 'map'
            }
        }
    };

    var person5 = {
        name: 'Jay-Z',
        notable: 'Gangsta rap Artist',
        properties: {
            image: '/m/05m3q8j',
            age: 31,
            dateOfBirth: '08/27/1983',
            placeOfBirth: {
                name: 'Honolulu',
                map: 'http://maps.google.com/',
                type: 'map'
            },
            nationality: 'American',
            family: {
                parents: [{
                    name: 'Father',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'male'
                }, {
                    name: 'Mother',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }],
                children: [{
                    name: 'Child 1',
                    mid: '/m/sdfew23',
                    image: '/m/234233',
                    gender: 'female'
                }]
            },
            education: {
                name: 'School name',
                map: 'http://maps.google.com',
                type: 'map'
            },
            profession: 'US President',
            living_in: {
                name: 'United States',
                map: 'http://maps.google.com',
                type: 'map'
            }
        }
    };

    var person = person1;
    var qeeme = document.getElementById('qeeme');
    qeeme.width = window.innerWidth;
    qeeme.height = window.innerHeight;

    var context = qeeme.getContext('2d');

    var color1 = {
        bg: '#006ea5',
        circleBg: '#063858',
        title: '#84c4dd',
        subtitle: '#fff',
        icon: '#ffe14f'
    };

    var color2 = {
        bg: '#354052',
        circleBg: '#57718d',
        title: '#a7b1c3',
        subtitle: '#6b7788',
        icon: '#43c0b5'
    };

    var color3 = {
        bg: '#ecf2f6',
        circleBg: '#bbe4dd',
        title: '#444756',
        subtitle: '#828b9d',
        icon: '#42c0b5'
    };

    var color4 = {
        bg: '#efefef',
        circleBg: '#2688b5',
        title: '#123d6c',
        subtitle: '#234b76',
        icon: '#295789'
    };

    var color5 = {
        bg: '#f0e9dc',
        circleBg: '#6f5f5c',
        title: '#6f5f5c',
        subtitle: '#b6a380',
        icon: '#cfbfa2'
    };


    var color10 = {
        circleBg: '#',
        title: '#',
        subtitle: '#',
        icon: '#'
    };

    var color = color5;

    document.querySelector('body').style.background = color.bg;
    document.querySelector('header h1').innerHTML = person.name;


    // icon
    context.font = '35px qeeme';
    context.textBaseline = 'top';
    context.fillStyle = color.icon;
    context.fillText('a', (qeeme.width / 2) - 17, 185);

    // icon circle
    context.beginPath();
    context.arc((qeeme.width / 2), 200, 25, 0, Math.PI * 2, false);
    context.closePath();
    context.strokeStyle = color.circleBg;
    context.lineWidth = 5;
    context.stroke();

    // var headerImage = new Image();
    // headerImage.onload = function() {
    //     context.drawImage(headerImage, 0, 0);
    // };
    //
    // headerImage.src = 'https://www.googleapis.com/freebase/v1/image' + '/m/0hj4q_0' + '? ' +
    //     'key=AIzaSyCQXvFx7PMLEImgshuRNJ_vlngLBCTVxkA' + '&maxwidth=' + qeeme.width;


    var personImage = new Image();

    var headerImage = new Image();

    // When the image is loaded, draw it
    personImage.onload = function() {
        // bg image
        context.beginPath();
        context.arc(57, 75, 55, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = color.circleBg;
        context.fill();

        // title
        context.font = 'bold 20px Roboto';
        context.textBaseline = 'top';
        context.fillStyle = color.title;
        context.fillText(person.name, 100, 110);

        // subtitle
        context.font = 'bold 12px Roboto';
        context.textBaseline = 'top';
        context.fillStyle = color.subtitle;
        context.fillText(person.notable, 100, 130);


        // birth / age
        context.font = 'bold 10px Roboto';
        context.textBaseline = 'top';
        context.fillStyle = '#ffffff';

        context.fillText(person.properties.dateOfBirth + ' (age ' + person.properties
            .age + ')', qeeme.width - 131, 83);
        // icon
        context.font = '12px qeeme';
        context.textBaseline = 'top';
        context.fillStyle = color.icon;
        context.fillText('l', qeeme.width - 145, 83);

        // living in
        context.font = 'bold 10px Roboto';
        context.textBaseline = 'top';
        context.fillStyle = '#ffffff';

        context.fillText(person.properties.living_in.name, qeeme.width - 131,
            63);
        // icon
        context.font = '14px qeeme';
        context.textBaseline = 'top';
        context.fillStyle = color.icon;
        context.fillText('m', qeeme.width - 145, 62);

        // var stage = new Kinetic.Stage({
        //   container: 'dart',
        //   width: 100,
        //   height: 200
        // });
        //
        // var layer = new Kinetic.Layer();
        // darth = new Kinetic.Image({
        //   x: 10,
        //   y: 10,
        //   image: personImage,
        //   blurRadius: 20
        // });
        //
        // layer.add(darth);
        // stage.add(layer);
        //
        // darth.cache();
        // darth.filters([Kinetic.Filters.Blur]);
        // layer.draw();

        // Save the state, so we can undo the clipping
        context.save();

        // Create a circle
        context.beginPath();
        var r,
            imgWidth = personImage.width,
            imgHeight = personImage.height;
        if (imgWidth < imgHeight) {
            r = imgWidth / 2;
        } else {
            r = imgHeight / 2;
        }
        var redfx = 8;
        var redfy = 25;

        var posx = r + redfx;
        var posy = r + redfy;

        console.log('raio=' + r);
        //context.arc(qeeme.width / 2, qeeme.height / 2, r, 0, Math.PI * 2, false);
        context.arc(posx, posy, r, 0, Math.PI * 2, false);

        // Clip to the current path
        context.clip();

        //context.drawImage(personImage, (qeeme.width / 2) - r, (qeeme.height / 2) - r, qeeme.width, qeeme.height);
        context.drawImage(personImage, redfx, redfy);

        // Undo the clipping
        context.restore();
    };

    // Specify the src to load the image
    var imageMid = '/m/059x99z', // obama
        //var imageMid = '/m/05mcv9y', // kate perry
        //var imageMid = '/m/0hj4q_0', // kate perry 2
        //var imageMid = '/m/0hj4qpd', // kate perry 3
        //var imageMid = '/m/0bndtsn', // Michael jordan
        // var imageMid = '/m/0byjccn', // orianthi
        maxwidth = 100,
        maxheight = 100;


    headerImage.onload = function() {
        context.drawImage(headerImage, 0, headerImage.width / 2, headerImage.width,
            100, 0, 0, headerImage.width, 100);
        context.globalAlpha = 0.75;
        context.fillStyle = '#000';
        context.fillRect(0, 0, headerImage.width, 100);
        context.globalAlpha = 1;
        personImage.src = getImageUrl(person.properties.image, maxwidth);
    };

    headerImage.src = getImageUrl(person.properties.image, qeeme.width);




    // var imageLoader = document.getElementById('imageLoader');
    // imageLoader.addEventListener('change', loadImage, false);
    //
    // function loadImage(e) {
    //     var reader = new FileReader();
    //     reader.onload = function(event) {
    //         personImage.src = event.target.result;
    //     };
    //     reader.readAsDataURL(e.target.files[0]);
    //     return false;
    // }
    // if(window.innerHeight > window.innerWidth) {
    //     orientation = 'landscape';
    // } else {
    //     orientation = 'portrait';
    // }

    //document.querySelector('header h1').innerHTML = orientation;
};
var orientation2;
if(window.innerHeight > window.innerWidth) {
    orientation2 = 'portrait';
} else {
    orientation2 = 'landscape';
}


var getImageUrl = function(imageMid, maxwidth) {
    return 'https://www.googleapis.com/freebase/v1/image' + imageMid + '? ' +
        'key=AIzaSyCQXvFx7PMLEImgshuRNJ_vlngLBCTVxkA' + '&maxwidth=' + maxwidth;
};

// Check device orientation
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        if((window.innerHeight > window.innerWidth) && orientation2 === 'landscape') {
            orientation2 = 'portrait';
            loadCanvas();
            return;
        }

        if((window.innerHeight < window.innerWidth) && orientation2 === 'portrait') {
            orientation2 = 'landscape';
            loadCanvas();
            return;
        }
    }, true);
}
