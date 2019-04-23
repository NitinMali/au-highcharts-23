/* eslint-disable padded-blocks */
export class SharedMethods {

  changeTab(tab) {
    //reset all label buttons
    let allLabels = document.querySelectorAll('.pc-tab nav label');
    for (let i = 0; i < allLabels.length; i++) {
      allLabels[i].classList.remove('tab-selected-label');
    }

    //reset all tab contents
    let allTabContents = document.querySelectorAll('.pc-tab section > div');
    for (let i = 0; i < allTabContents.length; i++) {
      allTabContents[i].style.display = 'none';
    }

    //only select the label and content which is clicked
    document.querySelector('#' + tab).style.display = 'block';
    document.querySelector('#' + tab + 'Label').classList.add('tab-selected-label');
  }
}
