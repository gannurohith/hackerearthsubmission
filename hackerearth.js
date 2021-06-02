class Student  
  {  
    constructor()  
    {  
       var name;  
       var marks;  
    }  
        getName()  
        {  
          return this.name;  
        }  
      setName(name)  
      {  
        this.name=name;  
      }  
        
      getMarks()  
      {  
        return this.marks;  
      }  
    setMarks(marks)  
    {  
      this.marks=marks;  
    }  
  
    }  
    var roh=new Student();  
     stud.setName("Rohith");  
     stud.setMarks(90);  
     document.writeln(roh.getName()+" "+roh.getMarks()); 