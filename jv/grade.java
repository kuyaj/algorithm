  private void GradeFilter(String comboGrade){
    try {
        ps = con.prepareStatement("select ID, Firstname, Lastname, Middlename, GradeLevel from records where GradeLevel='"+comboGrade"'");
        rs = ps.executeQuery();
        SearchTable.setModel(DbUtils.resultSetToTableModel(rs));
                    
    } 
    catch (SQLException e){ System.out.println(e);}
  }  
           