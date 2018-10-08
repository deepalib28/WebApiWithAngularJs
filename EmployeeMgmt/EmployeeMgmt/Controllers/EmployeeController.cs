using EmployeeMgmt.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;


namespace EmployeeMgmt.Controllers
{
    [RoutePrefix("api/employee")]
    public class EmployeeController: ApiController
    {
        EmployeeDbEntities _dbContext;
        [HttpGet]
        public IEnumerable<Employee> GetEmployees()
        {
            _dbContext = new EmployeeDbEntities();
            return _dbContext.Employees.ToList();

            //Employee item = new Employee()
            //{
            //    Id = 1,
            //    Name = "Deepali",
            //    EmailId = "test@gmail.com",
            //    EmployeeType = EmployeeType.Permanent
            //};

            //List<Employee> lst = new List<Employee>();
            //lst.Add(item);
            //return lst;
        }

        [Route("saveemployee")]
        [HttpPost]
        public void SaveEmployee(Employee emp)
        {
            _dbContext = new EmployeeDbEntities();
            _dbContext.Employees.Add(emp);
            _dbContext.SaveChanges();
        }
    }
}