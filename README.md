## Unit Assignment: Student Store

Submitted by: **Morgan Villanueva**

### Application Features

#### CORE FEATURES


- [X] **Database Creation**: Set up a Postgres database to store information about products and orders.
  - [X] Use the provided schema to create tables for `products`, `orders`, and `order_items`.
- [X] **Products Model**: Develop a model to represent individual items available in the store. 
  - [X] This model should include attributes such as `id`, `name`, `description`, `price`, `image_url`, and `category`.
  - [X] Implement methods for CRUD operations on products.
  - [X] Ensure transaction handling for the deletion of products to also delete related `order_items`
- [X]**Orders Model**: Develop a model to manage orders. 
  - [X] This model should include attributes such as `order_id`, `customer_id`, `total_price`, `status`, and `created_at`.
  - [X] Implement methods for creating, fetching, updating, and deleting orders.
  - [X] Ensure transaction handling for the deletion of orders to also delete related `order_items`
- [X] **Order Items Model**: Develop a model to represent the items within an order. 
  - [X] This model should include attributes such as `order_item_id`, `order_id`, `product_id`, `quantity`, and `price`.
  - [X] Implement methods for fetching and creating order items.
- [X] **API Endpoints**
  - [X] **Product Endpoints**:
    - [X] `GET /products`: Fetch a list of all products.
    - [X] `GET /products/:id`: Fetch details of a specific product by its ID.
    - [X] `POST /products`: Add a new product to the database.
    - [X] `PUT /products/:id`: Update the details of an existing product.
    - [X] `DELETE /products/:id`: Remove a product from the database.
  - [X] **Order Endpoints**:
    - [X] `GET /orders`: Fetch a list of all orders.
    - [X] `GET /orders/:order_id`: Fetch details of a specific order by its ID, including the order items.
    - [X] `POST /orders`: Create a new order with order items.
    - [X] `PUT /orders/:order_id`: Update the details of an existing order (e.g., change status).
    - [X] `DELETE /orders/:order_id`: Remove an order from the database.
- [X] **Frontend Integration**
  - [X] Connect the backend API to the provided frontend interface, ensuring dynamic interaction for product browsing, cart management, and order placement. Adjust the frontend as necessary to work with your API.


#### STRETCH FEATURES

- [X] **Added Endpoints**
  - [X] Create an endpoint for fetching all orders in the database.
  - [X] Create an endpoint for serving an individual order based on its ID.
- [ ] **Filter Orders**
  - [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] **Implement Your Own Frontend**
  - [ ] Build your own user interface for browsing products, managing the shopping cart, and placing orders. This will involve integrating the frontend you create with the backend API you developed during the project.
- [ ] **Past Orders Page**
  - [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.


### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

<div>
    <a href="https://www.loom.com/share/d24bd070ef6d44a4b1eb3a0a5fb102e4">
      <p>Loom Message - 27 June 2024 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/d24bd070ef6d44a4b1eb3a0a5fb102e4">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/d24bd070ef6d44a4b1eb3a0a5fb102e4-with-play.gif">
    </a>
  </div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

  The labs helped prepare me to complete project 4, specifically the creation of CRUD operations and integrations of the postgres database.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
  With more time, I'd implement the stretch features but also learn more about the postgreSQL and its functions

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

  My project demo showcased the student store and it went well. The only real issue was the order deletion which wasn't set up fully.

### Open-source libraries used

google, mdm, w3, stackeroverflow

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

My peers and the Codepath team

