# import geopandas as gpd

# # Replace these with your actual file paths
input_file = r"E:\personalProjects\forestFire\New folder\modis_2022_India.csv"
shapefile_path = r"E:\personalProjects\forestFire\New folder\tn_bound_new.shp"
output_file = "tamil_nadu_coordinates.csv"

# # Read coordinates from CSV, ensuring correct column order and CRS
# try:
#     coordinates = gpd.read_file(
#         coordinates_file, crs="epsg:4326", geometry=[0, 1]  # Assume latitude first, longitude second
#     )
# except (KeyError, ValueError):
#     print(
#         "Error: Invalid column order or coordinate reference system. Please ensure the "
#         "first column is latitude and the second is longitude, and specify the correct CRS "
#         "if it's not WGS84 (epsg:4326)."
#     )
#     raise

# # Load Tamil Nadu boundary shapefile
# try:
#     tamil_nadu_boundary = gpd.read_file(shapefile_path)
# except FileNotFoundError:
#     print("Error: Shapefile not found. Please ensure the file path is correct.")
#     raise

# # Check if coordinates are within the boundary using spatial join
# within_boundary = gpd.sjoin(
#     coordinates, tamil_nadu_boundary, how="inner", op="within"
# )

# # Write filtered coordinates to CSV
# try:
#     within_boundary.to_csv(output_file, index=False)
# except PermissionError:
#     print(
#         "Error: Insufficient permissions to write to the output file. Please check "
#         "permissions and try again."
#     )
#     raise
# except Exception as e:
#     print("Error:", e)
#     raise

# print(f"Coordinates within Tamil Nadu saved to {output_file}")
#######################################################


# import geopandas as gpd

# # Replace these with your actual file paths
# # coordinates_file = "your_coordinates.csv"
# # shapefile_path = "path/to/tamil_nadu_boundary.shp"
# # output_file = "tamil_nadu_coordinates.csv"

# # Read coordinates from CSV, assuming first column is latitude and second is longitude
# try:
#     coordinates = gpd.read_file(
#         coordinates_file, crs="epsg:4326", geometry=[1, 0]  # Latitude first, longitude second
#     )
# except (KeyError, ValueError):
#     print(
#         "Error: Invalid column order or coordinate reference system. Please ensure the "
#         "first column is latitude and the second is longitude, and specify the correct CRS "
#         "if it's not WGS84 (epsg:4326)."
#     )
#     raise

# # Load Tamil Nadu boundary shapefile
# try:
#     tamil_nadu_boundary = gpd.read_file(shapefile_path)
# except FileNotFoundError:
#     print("Error: Shapefile not found. Please ensure the file path is correct.")
#     raise

# # Check if coordinates are within the boundary using spatial join
# try:
#     within_boundary = gpd.sjoin(
#         coordinates, tamil_nadu_boundary, how="inner", op="within"
#     )
# except Exception as e:
#     print(f"Error during spatial join: {e}")
#     raise

# # Write filtered coordinates to CSV
# try:
#     within_boundary.to_csv(output_file, index=False)
# except PermissionError:
#     print(
#         "Error: Insufficient permissions to write to the output file. Please check "
#         "permissions and try again."
#     )
#     raise
# except Exception as e:
#     print(f"Error writing to CSV: {e}")
#     raise

# print(f"Coordinates within Tamil Nadu saved to {output_file}")


import csv

# Replace these with your actual file paths
# input_file = "your_coordinates.csv"
# output_file = "tamil_nadu_coordinates.csv"

# Define the Tamil Nadu boundary (approximate coordinates)
tamil_nadu_bounds = {
    "min_lat": 10.4,
    "max_lat": 13.5,
    "min_long": 78.2,
    "max_long": 80.3
}

with open(input_file, "r") as csvfile, open(output_file, "w", newline="") as output:
    reader = csv.reader(csvfile)
    writer = csv.writer(output)

    # Skip header row (if present)
    next(reader)

    # Filter coordinates and write to output file
    for row in reader:
        latitude = float(row[0])
        longitude = float(row[1])

        if (
            tamil_nadu_bounds["min_lat"] <= latitude <= tamil_nadu_bounds["max_lat"]
            and tamil_nadu_bounds["min_long"] <= longitude <= tamil_nadu_bounds["max_long"]
        ):
            writer.writerow(row)

print(f"Coordinates in Tamil Nadu saved to {output_file}")
