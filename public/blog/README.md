# Blog Images

Place blog post images in this directory.

## Required Images for Attendance Management System Blog Post

1. **attendance-live-deployment.png**
   - Browser screenshot showing the root endpoint response
   - Shows: `{"this is attendece":"backend"}` JSON response
   - URL visible: `a6d4d72195a6a4ec3b59f17ba1fcdf43-1710295516.us-east-1.elb.amazonaws.com`

2. **attendance-deployment-workflow.png**
   - Hand-drawn deployment workflow diagram
   - Shows: Dockerization → Docker Hub → AWS EKS → LoadBalancer → Public Access
   - Illustrates the complete deployment pipeline

3. **attendance-api-signup.png**
   - API client (Postman/Insomnia) screenshot
   - Shows: POST /signup request with 200 OK response
   - Request body: `{"name": "ali", "email": "test1@example.com", "password": "test123", "role": "student"}`
   - Response: `{"success": true, "data": {"_id": "...", "name": "ali", "email": "test1@example.com", "role": "student"}}`

## Image Specifications

- Format: PNG or JPG
- Recommended: PNG for screenshots with text
- Max width: 1200px (will be auto-scaled by browser)
- Optimize images before uploading for better performance

