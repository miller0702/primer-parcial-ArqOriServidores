import pgService from "../services/pg.service";

export const postUserModel = async (username, password, role ) => {
    try{
        const pg =  new pgService(); 
        pg.connection.none(`INSERT INTO PRODUCTO 
        (username, password , role)  
        VALUES 
        ($1, $2, $3)
        ` ,[username,password, role]);
        return  'Transacción realizada';
    }catch(error){ 
        return 'En este momento no se puede realizar su transacción';
    }

}