CREATE DEFINER=`root`@`localhost` TRIGGER `detalle_factura_AFTER_INSERT` AFTER INSERT ON `detalle_factura` FOR EACH ROW BEGIN
UPDATE producto SET inventario = inventario - NEW.cantidad WHERE producto.id = NEW.idproducto;
END