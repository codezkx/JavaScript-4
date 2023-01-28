class TrackablePromise<T> extends Promise<T> { 
  notifyHandlers: Array<any> = []
  constructor(executor) { 
    const notifyHandlers: any[] = [];
    super((resolve, reject) => { 
      return executor(resolve, reject, (status) => { 
        notifyHandlers.map((handler: any) => handler(status)); 
      }); 
    }); 
    this.notifyHandlers = notifyHandlers; 
  } 
  notify(notifyHandler) { 
    this.notifyHandlers.push(notifyHandler); 
    return this; 
  } 
 }
//  let p = new TrackablePromise((resolve, reject, notify) => { 
//   function countdown(x) { 
//   if (x > 0) { 
//   notify(`${20 * x}% remaining`); 
//   setTimeout(() => countdown(x - 1), 1000); 
//   } else { 
//   resolve(); 
//   } 
//   } 
//   countdown(5); 
//  });

 let p = new TrackablePromise((resolve: any, reject: any, notify: any) => { 
  function countdown(x) { 
    if (x > 0) { 
      notify(`${20 * x}% remaining`); 
      setTimeout(() => countdown(x - 1), 1000); 
    } else { 
      resolve(); 
    } 
  } 
  countdown(5); 
 }); 

 p.notify((x) => setTimeout(console.log, 0, 'progress:', x)); 
 p.then(() => setTimeout(console.log, 0, 'completed'));