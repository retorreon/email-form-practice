header {
    background-color: #0B1C51;
    margin-bottom: 40px;
  }
  
  header h1 {
    color: #fff;
    text-align: center;
    margin: 0;
    padding-top: 20px;
    font-size: 52px;
  }
  
  header nav {
    display: flex;
    justify-content: center;
  }
  
  header nav ul {
    display: flex;
    padding-left: 0;
    list-style: none;
  }
  
  header nav ul li a {
    color: #fff;
    text-decoration: none;
    margin: 0 20px 0 0;
    font-family: "Montserrat";
  }
  
  header nav ul li:last-child a {
    margin-right: 0;
  }
  
  @media all and (min-width: 600px) {
    header {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      align-items: center;
    }
  
    header h1 {
      font-size: 48px;
      margin: 14px 0;
      padding-top: 0;
    }
  
    header nav {
      margin-top: 8px;
    }
    header nav ul li a:hover {
      color: #bdbdbd;
    }
  }
  
  group {
    justify-content:flex-start;
    display: flex;
    margin-left:10px;
  }
  
  item{
    padding: 50px;
    align-self: flex-end;
    align-content: center;
  }
  
  form label {
      display: block;
      font-size: 18px;
      margin-bottom: 5px;
      margin-left: 10px;
      color: gray;
      font-family: "Montserrat";
    }
  
  form input[type="text"] {
      color: #000;
      font-size: 16px;
      margin-bottom: 20px;
    }
  
  
  form button {
      padding: 5px 12px;
      border-radius: 10px;
      border: 0;
      font-family: Tahoma;
      font-size: 12px;
      background: #000;
      color: #fff;
      margin: 0 8px 10px 0;
  }
  
  
  