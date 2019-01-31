/**
 * Created by Administrator on 2017/4/12.
 */
export const lowercase =(str)=>{
  if (!str) return ''
  str = str.toString()
  return str.toLowerCase()
}

export const uppercase =(str)=>{
  if (!str) return ''
  str = str.toString()
  return str.toUpperCase()
}

export const capitalize =(str)=>{
  if (!str) return ''
  str = str.toString()
  return str[0].toUpperCase() + str.slice(1)
}

export const sprintState =(str)=>{
  if(str == 2){
    return '未开始';
  }else if(str == 3){
    return '进行中';
  }else if(str == 4){
    return '已完成';
  } else if(str==0){
    return '已取消'
  }
}
export const defectState = (str) => {
  if (str == 1) {
    return '待修复';
  } else if (str == 2) {
    return '进行中';
  } else if (str == 3) {
    return '已修复';
  } else if (str == 4) {
    return '已关闭'
  }
}
export const defectClass = (str) => {
  if (str == 1) {
    return 'new';
  } else if (str == 2) {
    return 'doing';
  } else if (str == 3) {
    return 'success';
  } else if (str == 4) {
    return 'close'
  }
}
export const sprintClass =(str) => {
  if (str == 2) {
    return 'stateOne'
  } else if (str == 3) {
    return 'stateTwo';
  } else if (str == 4) {
    return 'stateThree';
  } else if (str == 0) {
    return 'stateFour';
  }
}

export const circularClass =(str) => {
  if (str == 2) {
    return 'circularOne'
  } else if (str == 3) {
    return 'circularTwo';
  } else if (str == 4) {
    return 'circularThree';
  } else if (str == 0) {
    return 'circularFour';
  }
}

export const userRole =(str)=>{
  if(str == 2){
    return 'PO';
  }else if(str == 3){
    return 'SM';
  }else if(str == 4){
    return 'BA';
  }
}

export const backlogState =(str) => {
  if (str == 0) {
    return '未分配';
  } else if (str == 1) {
    return '迭代中';
  } else if (str == 2) {
    return '已交付';
  } else if (str == -1) {
    return '已取消';
  }
}

export const stateClass =(str) => {
  if (str == 0) {
    return 'stateOne'
  } else if (str == 1) {
    return 'stateTwo';
  } else if (str == 2) {
    return 'stateThree';
  } else if (str == -1) {
    return 'stateFour';
  }
}
 export const reType = (str) => {
   if (str == 1) {
     return '工程需求'
   } else if (str == 2) {
     return '优化需求'
   } else if (str == 3) {
     return '工程故障'
   } else {
     return '----'
   }

 }
export const stateTask =(str) => {
  if (str == 0) {
    return '未领取'
  } else if (str == 1) {
    return '开发中';
  } else if (str == 2) {
    return '阻塞中';
  } else if (str == 3) {
    return '已完成';
  }
}
export const defectLevel = (str) => {
  if (str == 1000) {
    return '信息'
  } else if (str == 1001) {
    return '重要';
  } else if (str == 1003) {
    return '严重';
  } else if (str == 1004) {
    return '阻断';
  }

}
