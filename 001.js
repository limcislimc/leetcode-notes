   var nums = [2, 7, 11, 15], target = 26;
    var twoSum = function(nums, target) {
              var result = new Array();
              for(var i=0;i<nums.length;i++){
                for(var j=i+1;j<nums.length;j++){
                  if(nums[i]+nums[j] === target){
                    result.push(i);
                    result.push(j);
                    return result;
                  }
                }
              }
              return false;
         };
    //测试
    var s=twoSum(nums,target);
    console.log(s);
