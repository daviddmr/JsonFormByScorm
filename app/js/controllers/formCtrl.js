angular.module("jsonForm")
  .controller("formCtrl", ['$scope', '$routeParams', 
    function ($scope, $routeParams){

    $scope.title = "Formulário de informações do SCORM";
    $scope.scorm = {};
    $scope.scorm.topics = [{id: 1}];

    $scope.addNewTopic = function() {
      var size = $scope.scorm.topics.length;
      if(size > 0) {
        var lastElement = $scope.scorm.topics[size-1];
        $scope.scorm.topics.push({'id': lastElement.id + 1});
      } else {
        $scope.scorm.topics.push({'id': 1});
      }
    };

    $scope.removeTopic = function(index) {
      $scope.scorm.topics.splice(index, 1);
    };

    $scope.addNewPage = function(index) {
      if($scope.scorm.topics[index].pages == undefined) {
        fillPages(index, true);
      } else {
        fillPages(index, false);
      }
    };

    function fillPages(index, empty) {
      if(empty) {
        var newPage = [{id: 1}];  
        $scope.scorm.topics[index].pages = newPage;
      } else {
        var size = $scope.scorm.topics[index].pages.length;
        var lastElement = $scope.scorm.topics[index].pages[size-1];
        var newPage = {id: lastElement.id + 1};
        $scope.scorm.topics[index].pages.push(newPage);
      }

    }

    $scope.removePage = function(fatherIndex, index) {
      $scope.scorm.topics[fatherIndex].pages.splice(index, 1);
    };

    $scope.addNewVideo = function(grandFatherIndex, fatherIndex) {
      if($scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos == undefined) {
        fillVideos(grandFatherIndex, fatherIndex, true);
      } else {
        fillVideos(grandFatherIndex, fatherIndex, false);
      }
    };

    function fillVideos(grandFatherIndex, fatherIndex, empty) {
      if(empty) {
        var newVideo = [{id: 1}];
        $scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos = newVideo;
      } else {
        var size = $scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos.length;
        var lastElement = $scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos[size-1];
        var newVideo = {id: lastElement.id + 1};
        $scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos.push(newVideo);
      }
    }

    $scope.removeVideo = function(grandFatherIndex, fatherIndex, index) {
      console.log(grandFatherIndex, fatherIndex, index);
      $scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos.splice(index, 1);
    };

    $scope.exportFile = function(filename){

        var data = $scope.scorm;

        if(!filename) filename = 'index';
        filename = filename + ".json";

        if(!data) {
            console.error('Console.save: No data');
            return;
        }

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e)
    }

}]);	