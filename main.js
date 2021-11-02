var vueInstance = new Vue({
  el: '#app',
  data: {
    // Data binding
    // text: 'Truyền data vào html tag nè',
    // url: 'https://vuejs.org/',
    // target: '_blank',
    
    //--------------------------------------

    // Event
    // number: 0
    
    //--------------------------------------

    // Computed
    // a: 0,
    // b: 0,
    // increasedNumber: 10,
    
    //--------------------------------------

    // bind 2 chiều
    // text: '',

    //--------------------------------------

    // Conditional
    // value: 2,
    
    //--------------------------------------

    // List
    // array: [
    //   {
    //     name: 'Chú Thor',
    //     gender: false
    //   },
    //   {
    //     name: 'Fapmat',
    //     gender: true
    //   },
    //   {
    //     name: 'Hawl Vool',
    //     gender: true
    //   }
    // ]

    //--------------------------------------

    // lưu ý array
    array: [1, 2, 4, 5, 6 ,7]
  },

  methods: {
    // Data binding
    // render() {
    //   return 'Cũng vậy nhưng từ hàm'
    // },

    //--------------------------------------

    // Event
    // handleOnClick(event, number) {
    //   console.log(event.target);
    //   this.number += number;
    // }

    //--------------------------------------

    // Computed
    // increaseA() {
    //   console.log('run increaseA()');
    //   return this.a + this.increasedNumber;
    // },
    // increaseB() {
    //   console.log('run increaseB()');
    //   return this.b + this.increasedNumber;
    // },

    //--------------------------------------

    // Bind 2 chiều
    // handleOnChange(event) {
    //   this.text = event.target.value;
    // }
    
    //--------------------------------------


  },

  computed: {
    // Computed
    // increaseA() {
    //   console.log('run increaseA()');
    //   return this.a + this.increasedNumber;
    // },
    // increaseB() {
    //   console.log('run increaseB()');
    //   return this.b + this.increasedNumber;
    // },
    
    //--------------------------------------

    // Object
    // object() {
    //   return { height: '30px', width: '30px', background: 'red' }
    // }
  }
})

// console.log(vueInstance);