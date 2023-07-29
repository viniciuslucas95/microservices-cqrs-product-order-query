/**
 * @swagger
 * tags:
 *   name: product-order
 *   description: API for managing product orders
 */

/**
 * @swagger
 * /product-orders/verify:
 *   post:
 *     summary: Verify a product order
 *     tags: [product-order]
 *     requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orderId:
 *                   type: string
 *                   format: uuid
 *             example:
 *               orderId: cda5f321-86c5-4e8e-9be5-6c938ca0798c
 *     responses:
 *       200:
 *         description: Verify product order status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *             example:
 *                 status: approved
 */
