weight  = float(input("Enter weight: "))
unit = input("Enter unit (kg or lb): ")
if unit == "kg":
  unit_new = "lb"
  weight_new = weight / .45
elif unit == "lb":
  unit_new = "kg"
  weight_new = weight * .45
print(f"Converted: {weight}{unit} =  {weight_new}{unit_new}")
