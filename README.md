## Instructions to Run the Project Locally

### Clone the Project

```
git clone https://github.com/muhidhossain/bi-cycle-store.git
```

### Navigate to the Project Directory

```
cd bi-cycle-store
```

### Install Dependencies

```
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```
PORT=5005
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.jwaso.mongodb.net/bi-cycle-store?retryWrites=true&w=majority&appName=Cluster0
```

### Run the Project

Use the following commands to run the project:

- To run the project in development mode:

  ```
  npm run start:dev
  ```

- To build the project for production:

  ```
  npm run build
  ```

- To run the production server:
  ```
  npm run start
  ```

## Product Routes

```
Base URL: http://localhost:<PORT>
```

### Add a Product

- **URL:** `/api/products`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "string",
    "brand": "string",
    "price": number,
    "type": "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric",
    "description": "string",
    "quantity": number,
    "inStock": boolean,
    "isDeleted": boolean
  }
  ```
- **Success Response:**
  - **Code:** `201`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Product added successfully",
      "data": { ...product }
    }
    ```

### Get All Products

- **URL:** `/api/products`
- **Method:** `GET`
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Products fetched successfully",
      "data": [ ...products ]
    }
    ```

### Get Single Product

- **URL:** `/api/products/:id`
- **Method:** `GET`
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Product fetched successfully",
      "data": { ...product }
    }
    ```

### Update Product Using PUT

- **URL:** `/api/products/:id`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "name": "string",
    "brand": "string",
    "price": number,
    "type": "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric",
    "description": "string",
    "quantity": number,
    "inStock": boolean,
    "isDeleted": boolean
  }
  ```
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Product updated successfully",
      "data": { ...product }
    }
    ```

### Update Product Using PATCH

- **URL:** `/api/products/:id`
- **Method:** `PATCH`
- **Body:** Partial product object
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Product updated successfully",
      "data": { ...product }
    }
    ```

### Delete Product

- **URL:** `/api/products/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Product deleted successfully",
      "data": { ...product }
    }
    ```

## Order Routes

### Place an Order

- **URL:** `/api/orders`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "string",
    "product": "string",
    "quantity": number,
    "totalPrice": number
  }
  ```
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Order placed successfully",
      "data": { ...order }
    }
    ```

### Calculate Revenue

- **URL:** `/api/orders/revenue`
- **Method:** `GET`
- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    {
      "success": true,
      "message": "Revenue calculated successfully",
      "data": { ...revenue }
    }
    ```
