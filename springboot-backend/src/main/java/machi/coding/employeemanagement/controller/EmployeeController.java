package machi.coding.employeemanagement.controller;

import machi.coding.employeemanagement.excepion.ResourceNotFoundException;
import machi.coding.employeemanagement.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import machi.coding.employeemanagement.repository.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired //for dependency injection
    private EmployeeRepository employeeRepository;

    //get all employees
    @CrossOrigin
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //create employee
    @CrossOrigin
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        List<Employee> duplicateEmployees = employeeRepository.findByFirstName(employee.getFirstName());
        boolean found = false;
        for(int i=0;i<duplicateEmployees.size();i++){
            if(duplicateEmployees.get(i).equals(employee)){
                found = true;
            }
        }
        if(found == false){
            return employeeRepository.save(employee);
        }else{
            throw new RuntimeException("Here is a duplicate");
        }



    }

    //get employee by id rest api
    @CrossOrigin
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id).
                            orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: "+ id));
        return ResponseEntity.ok(employee);
    }

    //update employee rest api
    @CrossOrigin
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
        Employee employee = employeeRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: "+ id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());
        employee.setSalary(employeeDetails.getSalary());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    //delete employee rest api
    @CrossOrigin
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: "+ id));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
