console.log('JS OK');

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];
//console.log(slides.length);


const vueRoot = new Vue({

    el: '#app',

    data: {

        selection: 0,

        thumb: 'thumb',

        get activeDisplay() {
            return slides[this.selection].image
        },

        get titleDisplay() {
            return slides[this.selection].title
        },

        get description() {
            return slides[this.selection].text
        }

    },

    methods: {

        scrollUp: function () {

            if (this.selection < 1) {
                this.selection = 4;
            } else {
                this.selection--;
            }
        },

        scrollDown: function () {

            if (this.selection === 4) {
                this.selection = 0;
            } else {
                this.selection++;
            }
        }

    }

})