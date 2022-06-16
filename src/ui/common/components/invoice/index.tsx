import React from 'react'
import { Product } from '../../../../interfaces/product';
import { DEFAULT_DISCOUNT_RATE, DEFAULT_TAX_RATE } from '../../constants';
import AmountValueComponent from '../amount-value-component';
import ButtonComponent from '../button-component';
import InputComponent from '../input-component';
import Table from '../table';
import ValueComponent from '../value-component';
import { ComponentProps, useStylesFromThemeFunction } from './Invoice';

export const Invoice: React.FC<ComponentProps> = ({
  label,
  options,
  isLoading,
  products,
  handleCancel,
  handleConfirm,
  handlePrint,
  disabled
}) => {
  const classes = useStylesFromThemeFunction();
    const [amountDue, setAmountDue] = React.useState(0);
    const [amountPaid, setAmountPaid] = React.useState(0);
    const [tax, setTax] = React.useState(0);
    const [discount, setDiscount] = React.useState(0);
    const [subtotal, setSubtotal] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [date, setDate] = React.useState(new Date());
    const [amountReturned, setAmountReturned] = React.useState(0);

  const renderAddedProducts = () => {
    // render products and calculate totals here
    let tempSubtotal = 0;
    const renderedProducts = products.map(product => {
        const { name, unitPrice, quantity } = product;
        const total = unitPrice * quantity;
        tempSubtotal += total;

        return (
            <tr key={name}>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{unitPrice}</td>
            <td>{total}</td>
            </tr>
        );
    });
    setSubtotal(tempSubtotal);
    setTax(tempSubtotal * DEFAULT_TAX_RATE);
    setTotal(tempSubtotal + tax);
    setDiscount((tempSubtotal+tax) * DEFAULT_DISCOUNT_RATE);
    setAmountDue(Math.round((tempSubtotal + tax) - ((tempSubtotal+tax) * DEFAULT_DISCOUNT_RATE)));
    return renderedProducts;
  }

  const paidAmountChangeHandler = (amount: number) => {
    setAmountPaid(amount);
    setAmountReturned(Math.round(amount - amountDue));
  }

  return (
    <div className={classes.totalBillContainer}>
        <div className={`${classes.equallyDistantColumn}`}>
            <AmountValueComponent
                label='Amount Due'
                value={`${amountDue}`}
                direction='column'
            />
            <ValueComponent
                label='Invoice Number'
                value='0'
                direction='column'
            />
        </div>
        <div className={classes.padding8}>
            <ValueComponent
            label='Date'
            value={date.toLocaleDateString()}
            direction='row'
            />
        </div>
        <Table
            tableHeadings={['Product', 'Quantity', 'Price', 'Total']}
            renderBody={renderAddedProducts}
            loading={isLoading}
        />
        <div className={classes.paddingtop8}>
            <InputComponent
                label='Paid Amount'
                name='paidAmount'
                type='number'
                variant='primary'
                value={`${amountPaid}`}
                placeholder='0'
                onChange={paidAmountChangeHandler}
              />
        </div>
        <div className={classes.equallyDistantRow}>
            <ValueComponent
                label='Returned'
                value={`${Math.round(amountReturned)}`}
                direction='column'
            />
            <ValueComponent
                label='Subtotal'
                value={`${subtotal}`}
                direction='column'
            />
            <ValueComponent
                label='Tax'
                value={`${tax}`}
                direction='column'
            />
            <ValueComponent
                label='Total'
                value={`${total}`}
                direction='column'
            />
            <ValueComponent
                label='discount'
                value={`${discount}`}
                direction='column'
            />
        </div>
        <div className={classes.buttonsContainer}>
        <ButtonComponent
            onClick={handlePrint}
            variant='primary-outline'
        >
            <p>Print</p>
        </ButtonComponent>
        <ButtonComponent
            onClick={handleConfirm}
        >
            <p>Confirm</p>
        </ButtonComponent>
        <ButtonComponent
            onClick={handleCancel}
            variant='secondary'
        >
            <p>Cancel</p>
        </ButtonComponent>
        </div>
    </div>
  )
}
