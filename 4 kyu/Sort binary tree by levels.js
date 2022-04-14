//* I feel like there should be an easier way to do this with recursive functions but I'm better with loops */

function treeByLevels(rootNode) {
  //*If there is no data in the node return empty */
  if (rootNode === null) return [];

  //   console.log(rootNode)
  //*the out array is the answer once it is processed */
  let out = [];
  //*the loop array collects all of the nodes that still need to be processed (shouldn't be any larger since the parent node is shifted out before more is added) */
  let loopArr = [rootNode];

  while (loopArr.length > 0) {
    let curr = loopArr.shift();

    // console.log(out);
    // console.log(loopArr);
    out.push(curr.value);
    if (curr.left !== null) loopArr.push(curr.left);
    if (curr.right !== null) loopArr.push(curr.right);
  }

  return out;
}

//! NOT MY ANSWERS I JUST WANTED TO SAVE THEM

/*
function treeByLevels (rootNode, arr = [], step = 0) {
  arr[step] = arr[step] || []
  if(rootNode) arr[step].push(rootNode.value);
  if(rootNode && rootNode.left)  treeByLevels (rootNode.left, arr, step + 1)
  if(rootNode && rootNode.right)  treeByLevels (rootNode.right, arr, step + 1)

  return arr.flat()
}
*/
