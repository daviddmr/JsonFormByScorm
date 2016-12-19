angular.module("jsonForm")
  .controller("formCtrl", ['$scope', '$routeParams', 
    function ($scope, $routeParams){

    $scope.title = "Formulário de informações do SCORM";
    $scope.scorm = {};
    $scope.scorm.topics = [{id: 1}];
    $scope.types = ["CDD, WebAula"];
    
    $scope.addNewTopic = function() {
      var newTopic = $scope.scorm.topics.length+1;
      $scope.scorm.topics.push({'id': newTopic});
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
        var newPage = {id: size+1};
        $scope.scorm.topics[index].pages.push(newPage);
      }

    }

    $scope.removePage = function(fatherIndex, index) {
      $scope.scorm.topics[fatherIndex].pages.splice(index, 1);
    };

    $scope.addNewVideo = function(grandFatherIndex, fatherIndex) {
      console.log(grandFatherIndex, fatherIndex);
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
        var newVideo = {id: size+1};
        $scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos.push(newVideo);
      }
      console.log(newVideo);
      console.log($scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos);
    }

    $scope.removeVideo = function(grandFatherIndex, fatherIndex, index) {
      console.log(grandFatherIndex, fatherIndex, index);
      $scope.scorm.topics[grandFatherIndex].pages[fatherIndex].signVideos.splice(index, 1);
    };

}]);	