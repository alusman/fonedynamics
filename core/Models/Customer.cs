using System;
using System.Collections.Generic;

namespace core.models
{
    public class Customer 
    {
        public Guid Id { get; set; }
        public int Num_Employees { get; set; }
        public string Name { get; set; }
        public List<string> Tags { get; set; }
    }
}
