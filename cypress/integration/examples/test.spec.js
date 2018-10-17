var methodsSearchItem = require('../../../Page/SearchItem.js')
var methodAddReview = require('../../../Page/addReview.js')
var methodChanageQuantity = require('../../../Page/chanageQuantity.js')
var methodWishList = require('../../../Page/wishList.js')
var methodAddCamera = require('../../../Page/addCamera.js')
var methodFiltering = require('../../../Page/filtering.js')
var methodCompare = require('../../../Page/compare.js')
var methodAddMonitor = require('../../../Page/addMonitor.js')
var methodChanageMoney = require('../../../Page/chanageMoney.js')
var methodOrderList = require('../../../Page/orderList.js')
describe("Order items",()=>{
    it("SearchItem",()=>{
        cy.visit('http://shop.thetestingworld.com/index');
        methodsSearchItem.searchItem();
    })
    it("Add review to item",()=>{
        methodAddReview.addReview();
    })
    it("Chanage the quantity of item",()=>{
        methodChanageQuantity.chanageQuantity();
    })
    it("Add item to the wish list",()=>{
        methodWishList.wishList();
    })
    it("Add camera to the order list",()=>{
        methodAddCamera.addCamera();
    })
    it("Filtering the monitors",()=>{
        methodFiltering.filtering();
    })
    it("Compare between the monitors",()=>{
        methodCompare.compare();
    })
    it("Add monitors to the order list",()=>{
        methodAddMonitor.addMonitor();
    })
    it("Chanage the kind of the money",()=>{
        methodChanageMoney.chanageMoney();
    })
    it("Go to order list", ()=>{
        methodOrderList.orderList();
    })
})