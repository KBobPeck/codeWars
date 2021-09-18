    // TODO: complete this object/class


    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    function PaginationHelper(collection, itemsPerPage = 0) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    // returns the number of items within the entire collection
    PaginationHelper.prototype.itemCount = function () {
        return this.collection.length;
    }

    // returns the number of pages
    PaginationHelper.prototype.pageCount = function () {
        return Math.ceil(this.itemCount() / this.itemsPerPage)
    }

    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    PaginationHelper.prototype.pageItemCount = function (pageIndex) {
        console.log(`${this.collection} ${this.itemsPerPage} ${pageIndex}`)
        if (pageIndex + 1 > this.pageCount()) return -1;
        else if(pageIndex < 0) return -1;
        else if (pageIndex + 1 == this.pageCount()) return this.itemCount() - (pageIndex + 1) * this.pageCount();
        else return this.itemsPerPage;

    }

    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    PaginationHelper.prototype.pageIndex = function (itemIndex) {
        if(this.collection == 0) return -1
        if (itemIndex > this.pageCount()*this.itemsPerPage) return -1;
        else if (itemIndex < 0) return -1;

        itemIndex = Math.floor((itemIndex + 1) / this.itemsPerPage);
        return itemIndex;
    }

    // class PaginationHelper {
    //     constructor(collection, itemsPerPage){
    //         this.collection = collection;
    //         this.itemsPerPage = itemsPerPage;
    //     }

    //     itemCount() {
    //         return this.collection.length
    //     }

    //     pageCount(){
    //         return Math.ceil(this.itemCount() /this.itemsPerPage)
    //     }

    //     pageItemCount(index){
    //         if(index + 1 > this.pageCount()) return -1
    //         else if(index + 1 == this.pageCount()) return this.itemCount() - (index + 1) * this.pageCount()
    //         else return this.itemsPerPage;
    //     }

    //     pageIndex(index){
    //         index = Math.floor((index + 1) / this.itemsPerPage);
    //         if(index > this.pageCount()) return -1;
    //         else if(index < 0) return -1;
    //         else return index;
    //     }
    // }

    var helper = new PaginationHelper([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 10);
    console.log(helper.pageCount()); //should == 2
    console.log(helper.itemCount()); //should == 6
    console.log(helper.pageItemCount(0)); //should == 4
    console.log(helper.pageItemCount(1)); // last page - should == 2
    console.log(helper.pageItemCount(3)); // should == -1 since the page is invalid
    console.log('break')

    // pageIndex takes an item index and returns the page that it belongs on
    console.log(helper.pageIndex(5)); //should == 1 (zero based index)
    console.log(helper.pageIndex(2)); //should == 0
    console.log(helper.pageIndex(20)); //should == -1
    console.log(helper.pageIndex(-1)); //should == -1