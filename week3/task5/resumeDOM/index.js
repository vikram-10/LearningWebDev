var wrapper=document.createElement('div');
wrapper.setAttribute('class','wrapper');


var greyHeader=document.createElement('div');
greyHeader.setAttribute('class','header');

var imgInsert=document.createElement('img');
imgInsert.setAttribute('src','user.jpg');
imgInsert.setAttribute('class','userImage');

var whiteHeader=document.createElement('div');
whiteHeader.setAttribute('class','white');


var greyStrip=document.createElement('div');
greyStrip.setAttribute('class','strip');

var nameTag=document.createElement('div');
nameTag.setAttribute('class','nametag')
nameTag.innerText="BRIAN DUDEY";

var topAddress=document.createElement('div');
topAddress.setAttribute('class','topAddress');
topAddress.innerText="N Damien Avenure,Chicago 99999|999-999-9999|hello@kickresume.com|www.kickresume.com"

var line=document.createElement('hr');

var verticalLine=document.createElement('div');
verticalLine.setAttribute('class','vline');

var leftItems=document.createElement('div');
leftItems.setAttribute('class','leftItems');


var profileText=document.createElement('div');
profileText.setAttribute('class','headerText');
profileText.innerHTML="<i class=\"fa fa-user\"></i> Profile";

var breaker=document.createElement('br');

var lorem=document.createElement('div');
lorem.setAttribute('class','contentWidth');
lorem.innerText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh orci, viverra iaculis pulvinar quis, pulvinar id elit. Mauris diam nisi, volutpat at mauris nec, condimentum efficitur magna. Nam mi lacus, malesuada quis consectetur ultrices, feugiat eget arcu. Cras finibus rhoncus leo vitae tincidunt. Maecenas nibh eros, efficitur et purus non, efficitur consectetur massa. Duis ultrices massa eget magna hendrerit pharetra. Duis fermentum, eros ac placerat pharetra, sem ex sodales mauris, vitae sodales arcu risus a erat. Suspendisse nec lorem laoreet, varius lorem ac, auctor dolor."


var skillsText=document.createElement('div');
skillsText.setAttribute('class','headerText');
skillsText.innerHTML="<i class=\"fa fa-flask\" aria-hidden=\"true\"></i> Skills";

var skillSubheading=document.createElement('p');
skillSubheading.setAttribute('class','skillSubheader');
skillSubheading.innerText="Technical Skills"

var skillList=document.createElement('ul');
skillList.setAttribute('style','list-style:none');
skillList.setAttribute('style','padding:0');
skillList.setAttribute('class','newWidth')
skillList.innerHTML="<li>Java <div class=\"slider\"><span id=\"amountJava\"></span></div></li><li>CSS<div class=\"slider\"><span id=\"amountCss\"></span></div></li><li>HTML<div class=\"slider\"><span id=\"amountHtml\"></span></div></li><li>React<div class=\"slider\"><span id=\"amountReact\"></span></div></li><li>Redux<div class=\"slider\"><span id=\"amountRedux\"></span></div></li><li>Mongo<div class=\"slider\"><span id=\"amountMongo\"></span></div></li><li>Deployment<div class=\"slider\"><span id=\"amountDeployment\"></span></div></li>"

var skillSubheading2=document.createElement('p');
skillSubheading2.setAttribute('class','skillSubheader');
skillSubheading2.innerText="Additional Skills";

var skillList2=document.createElement('ul');
skillList2.setAttribute('style','list-style:none');
skillList2.setAttribute('style','padding:0');
skillList2.setAttribute('class','newWidth');
skillList2.innerHTML="<li>Proj Management <div class=\"slider\"><span id=\"amountJava\"></span></div></li><li>Recruitment<div class=\"slider\"><span id=\"amountCss\"></span></div></li><li>Business Dev<div class=\"slider\"><span id=\"amountHtml\"></span></div></li><li>Editing<div class=\"slider\"><span id=\"amountReact\"></span></div></li><li>Fundraising<div class=\"slider\"><span id=\"amountRedux\"></span></div></li>"

var workExperinceHeader=document.createElement('div');
workExperinceHeader.setAttribute('class','headerText');
workExperinceHeader.innerHTML="<i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>  Work Experience";


var workExp=document.createElement('div');
workExp.setAttribute('class','contentWidth');
workExp.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh orci, viverra iaculis pulvinar quis, pulvinar id elit. Mauris diam nisi, volutpat at mauris nec, condimentum efficitur magna. Nam mi lacus, malesuada quis consectetur ultrices, feugiat eget arcu.";

var workExperinceHeader2=document.createElement('div');
workExperinceHeader2.setAttribute('class','headerText');
workExperinceHeader2.setAttribute('id','rightItem1')
workExperinceHeader2.innerHTML="<i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>  Work Experience";

var workExp2=document.createElement('div');
workExp2.setAttribute('id','rightItem2');
workExp2.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh orci, viverra iaculis pulvinar quis, pulvinar id elit. Mauris diam nisi, volutpat at mauris nec, condimentum efficitur magna. Nam mi lacus, malesuada quis consectetur ultrices, feugiat eget arcu. Cras finibus rhoncus leo vitae tincidunt. Maecenas nibh eros, efficitur et purus non, efficitur consectetur massa. Duis ultrices massa eget magna hendrerit pharetra. Duis fermentum, eros ac placerat pharetra, sem ex sodales mauris, vitae sodales arcu risus a erat. Suspendisse nec lorem laoreet, varius lorem ac, auctor dolor.";


var educationHeader=document.createElement('div');
educationHeader.setAttribute('class','headerText');
educationHeader.setAttribute('id','rightItem3');
educationHeader.innerHTML="<i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> Education";

var educationContent=document.createElement('div');
educationContent.setAttribute('id','rightItem4');
educationContent.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh orci, viverra iaculis pulvinar quis, pulvinar id elit. Mauris diam nisi, volutpat at mauris nec, condimentum efficitur magna. Nam mi lacus, malesuada quis consectetur ultrices, feugiat eget arcu. Cras finibus rhoncus leo vitae tincidunt. Maecenas nibh eros, efficitur et purus non, efficitur consectetur massa. Duis ultrices massa eget magna hendrerit pharetra. Duis fermentum, eros ac placerat pharetra, sem ex sodales mauris, vitae sodales arcu risus a erat. Suspendisse nec lorem laoreet, varius lorem ac, auctor dolor.";

wrapper.append(greyHeader);
wrapper.append(whiteHeader);
wrapper.append(greyStrip);
wrapper.append(imgInsert);
wrapper.append(nameTag);
wrapper.append(topAddress);
wrapper.append(line);
wrapper.append(verticalLine);
wrapper.append(leftItems);
wrapper.append(profileText);
wrapper.append(breaker)
wrapper.append(lorem);
wrapper.append(breaker);
wrapper.append(skillsText);
wrapper.append(skillSubheading);
wrapper.append(skillList);
wrapper.append(skillSubheading2);
wrapper.append(skillList2);
wrapper.append(workExperinceHeader);
wrapper.append(breaker);
wrapper.append(breaker);
wrapper.append(workExp);
wrapper.append(workExperinceHeader2);
wrapper.append(workExp2);
wrapper.append(educationHeader);
wrapper.append(educationContent);
document.body.append(wrapper);

