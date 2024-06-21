import os

# Directory where the images are stored
img_directory = './assets/img/item_images'

# Ensure the directory exists
if not os.path.exists(img_directory):
    print(f"Directory '{img_directory}' does not exist.")
    exit(1)

# Get all the image filenames in the directory
img_files = [f for f in os.listdir(img_directory) if os.path.isfile(os.path.join(img_directory, f))]

# Check if any image files are found
if not img_files:
    print(f"No image files found in directory '{img_directory}'.")
    exit(1)

# Create a dictionary mapping the base filename (without extension) to the require statement
img_map = {}
for img in img_files:
    key = os.path.splitext(img)[0]
    img_map[key] = f"require('../assets/img/item_images/{img}')"

# Generate the JavaScript content
js_content = 'const itemImages = {\n'
for key, value in img_map.items():
    js_content += f"    {key}: {value},\n"
js_content += '};\n\nexport default itemImages;'

# Write the content to a JavaScript file
output_file_path = './components/itemImages.js'
try:
    with open(output_file_path, 'w') as js_file:
        js_file.write(js_content)
    print(f"itemImages.js has been generated successfully at '{output_file_path}'.")
except Exception as e:
    print(f"Failed to write to file '{output_file_path}'. Error: {e}")
    exit(1)
