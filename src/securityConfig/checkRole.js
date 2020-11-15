export const checkRole = (signin,history,auth) => {
    if(auth!==null){
        if ( signin.account !== null) {
            let id = signin.account.roleId[0];
            if (id === 1) {
              //admin
              return history.push(`/admin/`);
            } else if (id === 2) {
              //user
              return history.push('/user');
            } else if (id === 3) {
              //customer
              return history.push('/customer');
            } else {
              //none
              return history.push('/');
            }
          }
    }else{
        // return history.push('/homepage');
    }
  }