import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cargo: [
      {
        img:
          "https://fs.lnwfile.com/z7bwyr.jpg",
        name: "เสื้อครอปแขนยาวรูดหน้า2ข้าง",
        price: 179,
      },
      {
        img:
          "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.0-9/77111678_2458315751110607_2761397618931138560_o.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeEq_fjYHR21cAzSnb84LZmVXgj9gSZiOepeCP2BJmI56vcDrNBKaF2RFsqO0K2Ib9mxU6RFGhUq1tKneEMk3hBp&_nc_ohc=NnpEKKO1mRAAX-P-4RD&_nc_ht=scontent.fcnx3-1.fna&oh=bf23ee1f8ccb3824b6e57e5a9b716bde&oe=605E3EA1",
        name: "เสื้อครอปแขนยาว รูดหน้าทั้ง2ข้าง จั้มแขน ",
        price: 189,
      },
      {
        img:
          "https://fs.lnwfile.com/87aiux.jpg",
        name: "ชุดเซทเสื้อแขนสั้นกางเกงขายาว",
        price: 259,
      },
      {
        img:
          "https://fs.lnwfile.com/l6fske.jpg",
        name: "เสื้อยืดคอยูทรงoversize",
        price: 149,
      },
      {
        img:
          "https://fs.lnwfile.com/6735p0.jpg",
        name: "เสื้อคอยูแขนสั้น ผ้าไหมพรม",
        price: 159,
      },
      {
        img:
          "https://fs.lnwfile.com/2ygv3m.jpg",
        name: "มินิเดรสแขนตุ๊กตาแต่งจีบรอบตัว",
        price: 229,
      },
      {
        img:
          "https://fs.lnwfile.com/ulsgam.jpg",
        name: "มินิเดรสสีม่วง",
        price: 219,
      },
      {
        img:
          "https://fs.lnwfile.com/otdhmd.jpg",
        name: "มินิเดรสเอวย่นลายดอกไม้",
        price: 259,
      },
      {
        img:
          "https://fs.lnwfile.com/zjhx3x.jpg",
        name: "ครอปแขนชีฟอง ช่วงอกถักโครเชต์แต่งลาย",
        price: 189,
      },
      {
        img:
          "https://i.pinimg.com/originals/16/d2/b2/16d2b2a2867d086c57bb05a42d4e2a8d.jpg",
        name: "ชุดเดรส",
        price: 259,
      },
      {
        img:
          "https://fk.lnwfile.com/f1006p.jpg",
        name: "เสื้อลูกไม้คอเหลี่ยม กางเกงขาสั้น",
        price: 259,
      },
      {
        img:
          "https://dj.lnwfile.com/3u57dk.jpg",
        name: "ชุดเดรส",
        price: 259,
      },
    ],
    select: [],
    Totalprice: 0,
  },
  getters: {
    T: state => {
      return state.Totalprice;
    },
    Menu: state => {
      return state.cargo;
    },
    Order: state => value => {
      state.select.push(value);
    },
    ShowSelect: state => {
      return state.select;
    }
  },
  mutations: {
    //Clearสินค้า
    Clear: state => {
      state.Totalprice = 0;
      state.select = [];
    },
    //รวมราคา
    Submit: state => {
      state.Totalprice = 0;
      for (let i = 0; i < state.select.length; i++) {
        state.Totalprice = state.Totalprice + state.select[i].Total;
      }
    }
  },
  actions: {},
  modules: {}
})
//忍