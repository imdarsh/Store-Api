

const getAllProductsStatic = async (req,res) => {
    res.status(200).json({ message: `Product testing route` });
}

const getAllProducts = async (req,res) => {
    res.status(200).json({ message: 'Product route' });

}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}