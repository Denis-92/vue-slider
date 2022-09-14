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


const app = new Vue(

    {

        el: '#app',

        data: {

            slides,

            selection: 0,

        },

        methods: {

            scrollUp() {

                if (this.selection === 0) {
                    this.selection = this.slides.length - 1;
                } else {
                    this.selection--;
                }
            },

            scrollDown() { // ': function' NON NECESSARIO

                if (this.selection < (this.slides.length - 1)) {
                    this.selection++;
                } else {
                    this.selection = 0;
                }
            }

        }

    }

);