/**
 * Created by Administrator on 2017/8/24.
 */
var express = require('express');
var fs = require('fs');
var path = require('path');
// var formidable = require('formidable') //post请求接收参数或者上传文件时候可能会用到
// var gm = require('gm');

const IP = "localhost";
const PORT = "8081";
const FILEPATH = path.join(__dirname, `./mock/`);

var app = express();


//静态文件地址
app.use('/oss/download', express.static(path.join(__dirname, '/oss/download')));

app.use('*', function (req, res, next) {
  res.setHeader('Content-Type', 'text/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', req.headers['origin'] || req.headers['referer'] || "*");
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.all('/user/login/:account/:password', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `login.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});

//查询所有人员
app.get('/user/users/', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getUsers.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});


app.all('/mission', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `mission.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});

app.get('/changeLane', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `changeLane.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.status(200).send(data)
    }
  })
});

app.all('/user/logout', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `logout.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});

//上传头像
app.all('/zuul/oss/upload/img', (req, res, next) => {
  // var form = new formidable.IncomingForm();
  // form.uploadDir = "./oss/download";
  // form.maxFieldsSize = 10 * 1024 * 1024;
  // form.keepExtensions = true;
  // form.parse(req, function (err, fields, files) {
  //   if (err) {
  //     throw err;
  //   }
  //   res.send(files.file.path.slice(13))
  // });
});

//剪切头像
app.all('/agile/user/img/cut', (req, res, next) => {
  // var form = new formidable.IncomingForm();
  // form.parse(req, function (err, fields, files) {
  //   var fileName = fields.fileName;
  //   var realName = fileName.slice(fileName.indexOf("upload_"))
  //   var cutName = realName.replace('upload_', 'cutImage_');
  //   gm(path.join(__dirname, "/oss/download/" + realName)).crop(fields.w, fields.h, fields.x, fields.y).write(path.join(__dirname, "/oss/download/" + cutName), function (err) {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       res.send({path: `http://${IP}:${PORT}/oss/download/${cutName}`});
  //     }
  //   });
  // });
});

//查询所有项目
app.get('/agile/projects/user/', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getProjects.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 2000)

    }
  })
});
app.get('/agile/fault/faultLevels', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `faultLevels.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)
    }
  })
});


//根据名称查询项目
app.get('/agile/projects/name/:projectName', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getProjectsByName.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)
    }
  })
});

//新建项目
app.post('/agile/projects', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `createProject.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

//新建迭代
app.post('/agile/sprints', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `createSprint.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});
//编辑迭代
app.put('/agile/sprints/edit', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `createSprint.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

//取消迭代
app.put('/agile/sprints/edit/cancel/:sprintId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `cancelSprint.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});


//删除迭代
app.delete('/agile/sprints/edit/:sprintId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `deleteSprint.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

//完成迭代
app.put('/agile/sprints/edit/:sprintId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `finishSprint.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

//查询已经选择的项目信息
app.get('/agile/projects/choose/info', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getSelectedProject.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});
//按名称查询项目
app.get('/projects/:projectName', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getProjects.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});

//收藏or取消收藏项目
app.all('/agile/projects/follow/:id', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `followProject.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});


//校验项目名称是否重复
app.get('/agile/projects/checkRepeat/:projectName/:projectId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `checkProjectNameRepeat.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});

//项目编辑的时候判断人是不是可以删除
app.get('/agile/projects/members/:id/:userId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `canDelPerson.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});

//选择项目
app.post('/agile/projects/choose/:id', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `chooseProject.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});
// 需求列表
app.post('/backlogs/', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `backlog.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});

//查询已经登录的用户信息
app.get('/agile/users/info/', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getLoginUser.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});


//迭代列表
app.get('/agile/sprints/', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `sprintTable.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});

//迭代时间轴
app.get('/agile/sprints/timeline/', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `sprint.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});


//查询需求列表
app.get('/agile/backlogs', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `backlog.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//查询需求小列表
app.get('/agile/backlogs/allBacklogs', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `backlogList.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//迭代列表byId
app.get('/agile/sprints/edit/:sprintId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `sprintById.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});
//查询迭代小列表
app.get('/agile/sprints/all', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `sprintsAll.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

// 新建迭代查看可选团队(含成员)
app.get('/agile/sprints/teams/members/optional/:sprintId/:start/:end', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `sprintsTeams.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

// 新建迭代，校验迭代周期是否重复
app.get('/agile/sprints/time/optional/:sprintId/:start/:end', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `checkSprintTime.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//新建迭代查看可选人员(所有成员)
app.get('/agile/sprints/members/optional/:sprintId/:start/:end', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `sprintsMembers.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//故事泳道
app.get('/agile/storys/allStorys/lane', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `storyLanes.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//泳道状态数量
app.get('/agile/storys/allStorys/countLane', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `storyCountLane.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//新建迭代，查询未分配故事
app.get('/agile/storys/allStorys/:order', (req, res, next) => {
  "use strict";
    var order  = req.params.order;
    if(order ==1){
      fs.readFile(path.join(FILEPATH, `getUndoStoryforSprint.json`), 'utf-8', (err, data) => {
        if (err) {
          res.send(404)
        } else {
          res.send(data)
        }
      })
    }else if(order ==2){
      fs.readFile(path.join(FILEPATH, `getUndoStoryforSprint2.json`), 'utf-8', (err, data) => {
        if (err) {
          res.send(404)
        } else {
          res.send(data)
        }
      })
    } else if(order ==3){
      fs.readFile(path.join(FILEPATH, `getUndoStoryforSprint3.json`), 'utf-8', (err, data) => {
        if (err) {
          res.send(404)
        } else {
          res.send(data)
        }
      })
    }
})


//新建需求
app.post('/agile/backlog', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `reCreateds.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})


//查看单个需求
app.get('/agile/backlogs/:backlogId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `queryBacklog.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//查询泳道
app.get('/agile/backlogs/allBacklogs/lane', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `backlogLane.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//编辑需求
app.put('/agile/backlog', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `backlogEdtor.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//删除需求
app.delete('/agile/backlog/:backlogId/:isDeleteStory', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `deleteBacklog.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//取消需求
app.put('/agile/backlog/:backlogId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `cancelBacklog.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//泳道数量
app.get('/agile/backlogs/allBacklogs/countLane', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `laneCount.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//查询需求提出人姓名
app.get('/agile/backlog/requirementNames', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `backlogPepole.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})


//根据迭代ID，获取旗下的故事，任务
app.get('/agile/sprints/tasks/:sprintId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getStoryTaskBySpringId.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})
//故事大列表
app.get('/agile/storys', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `storyList.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//为迭代分配故事
app.put('/agile/storys/sprints/:storyId/:sprintId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `connectSprintStroy.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
})

//取消故事和迭代关联关系
app.put('/agile/sprints/storys/:sprintId/:storyId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `connectSprintStroy.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
})
//迭代回顾,员工工作量明细
app.get('/agile/tasks/types', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `taskTypes.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)
    }
  })
});

//取消故事和迭代关联关系
app.get('/agile/tasks/test/:sprintId/:storyId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `checkCanCreateTask.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
})

//查询故事创建人员
app.get('/agile/story/createNames', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `storyPepole.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
})

//新建任务
app.post('/agile/tasks', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `createTask.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
})

//任务编辑
app.put('/agile/tasks', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `editTask.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
})

//删除任务
app.delete('/agile/tasks/:taskId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `createTask.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
})

//故事小列表
app.get('/agile/storys/allStorys', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `smallStoryList.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//查询未开始迭代
app.get('/agile/storys/sprints', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `storySprints.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//故事分配迭代
app.put('/agile/storys/sprints/:storyId/:sprintId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `putStorySprints.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//新建故事
app.post('/agile/story', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `createdStory.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//根据故事Id查询故事
app.get('/agile/storys/:storyId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getStory.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//编辑故事
app.put('/agile/story', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `storyEdtor.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//取消故事
app.put('/agile/story/:storyId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `putStory.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//删除故事
app.delete('/agile/story/:storyId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `deleteStory.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

// 获取团队
app.get('/agile/teams', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getTeam.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

// 获取迭代
app.get('/agile/board/sprints/:teamId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getIteration.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

// 燃尽图迭代剩余工作量
app.get('/agile/burndowns/:sprintId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getBurndowns.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

// 燃尽图迭代总工作量
app.get('/agile/sprint/workload/:sprintId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getWorkload.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})
//看板根据迭代ID获取故事任务
app.get('/agile/board/storys/:sprintId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getStroyTaskBySprintIdForboard.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//查询任务信息
app.get('/agile/tasks/:taskId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getTaskById.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

app.get('/agile/tasks/histories/:taskId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getTaskHistoryById.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//查询迭代下所有人员
app.get('/agile/sprints/members/:sprintId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getSprintUsers.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//启动项目
app.put('/agile/projects/start/:id', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `startProject.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})


//暂停项目
app.put('/agile/projects/stop/:id', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `stopProject.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//编辑项目保存
app.put('/agile/projects/edit', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `editProject.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//修改用户的信息
app.put('/user/user/emailphone', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `updateUserInfo.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//校验旧密码是否正确
app.get('/user/user/password/:password', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `checkOldPassword.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//修改密码
app.put('/user/user/password/:oldPassword/:password', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `changePassword.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//删除项目
app.delete('/agile/projects/:id', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `delProject.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//根据projectID，查询项目信息
app.get('/agile/projects/edit/:id', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `getProjectById.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(()=>{
        res.send(data)
      },200)

    }
  })
})

//任务拖拽请求后台
app.post('/agile/board/task/state/:taskId/:from/:to', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `dropTask.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)

    }
  })
})

//getToken
app.get('/agile/token', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `token.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
})

//新建模块
app.post('/agile/module', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `postModule.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

//查询模块列表
app.get('/agile/modules', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getModule.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

//删除模块
app.delete('/agile/module/:moduleId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `moduleDelete.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

//迭代回顾，获取故事信息
app.get('/agile/sprints/review/:sprintId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `sprintReview.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)
    }
  })
});

//根据迭代Id获取任务，支持分页
app.get('/agile/tasks', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getTasksBySrpingIdForPage.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
});

//迭代回顾，人员
app.get('/agile/sprints/review/members/:sprintId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `sprintReviewPerson.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)
    }
  })
});

//迭代回顾，任务饼图
app.get('/agile/sprints/review/task/:storyId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `sprintReviewTask.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)
    }
  })
});

//迭代回顾,员工工作量明细
app.get('/agile/sprints/review/statistics/:sprintId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `sprintReviewPersonWorkLoad.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)
    }
  })
});



app.listen(PORT, IP, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('fileResfulServer Listening at http://' + IP + ':' + PORT + '\n')
})

// 批量下载
app.post('/agile/excel/export', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `postModule.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

// socketIo 启动
app.post('/agile/cmp/start', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `log1105.json`), 'utf-8', (err, data) => {
    if (err) {
    } else {
      var json = JSON.parse(data);
      json.data = "1"
      fs.writeFile(path.join(FILEPATH, `log1105.json`), JSON.stringify(json), (err) => {
        if (err) throw err;
        setTimeout(function(){
          json.data = "2"
          fs.writeFile(path.join(FILEPATH, `log1105.json`), JSON.stringify(json), (err) => {
            if (err) throw err;
            res.send(JSON.stringify(json))
          });
        },1000)
      });
    }
  })
});

app.post('/stopcmp', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `log1105.json`), 'utf-8', (err, data) => {
    if (err) {
    } else {
      var json = JSON.parse(data);
      json.data = "0"
      fs.writeFile(path.join(FILEPATH, `log1105.json`), JSON.stringify(json), (err) => {
        if (err) throw err;
        res.send(JSON.stringify(json));
      });
    }
  })
});

app.put('/agile/sprint/summary/:sprintId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `postModule.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});

//缺陷列表
app.get('/agile/faults', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getDefaults.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
});
//单个缺陷
app.get('/agile/fault/:faultId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getDefault.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
});
//新建缺陷
app.post('/agile/fault', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `faultCreated.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});
//编辑缺陷`
app.put('/agile/fault', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `faultEdt.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      res.send(data)
    }
  })
});
//缺陷管理迭代
app.put('/agile/fault/sprint/:sprintId', (req, res, next) => {
  "use strict";
  fs.readFile(path.join(FILEPATH, `faultRelSprint.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 0)
    }
  })
});

//删除迭代
app.delete('/agile/fault/:faultId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `deleteSprint.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 1000)
    }
  })
});
// 获取用例列表
app.get('/agile/cases', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `caseList.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
});

// 获取用例规模
app.get('/agile/case/scales', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getCaseScale.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
});
// 编辑用例
app.put('/agile/case', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `caseEdtor.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
});

// 获取单个用例
app.get('/agile/case/:caseId', (req, res, next) => {
  fs.readFile(path.join(FILEPATH, `getCaseContent.json`), 'utf-8', (err, data) => {
    if (err) {
      res.send(404)
    } else {
      setTimeout(function () {
        res.send(data)
      }, 200)
    }
  })
});
