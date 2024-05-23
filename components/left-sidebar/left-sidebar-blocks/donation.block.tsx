import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useLocaleContext } from '@/context/locale.context';
import { usePhoneContext } from '@/context/phone.context';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/funcs/format-currency';
import { IAddedBlock } from '@/utils/interfaces/block.interface';
import { IDonationForm } from '@/utils/interfaces/donation.interface';
import {
  DEFAULT_DONATION_FORM,
  DONATION_METHODS,
  MIN_DONATION,
  recommendedDonations,
} from '@/utils/mocks/donation.mock';

import { BlockActions } from './block.actions';

interface IProps {
  addedBlock: IAddedBlock;
}

export const DonationBlock = ({ addedBlock }: IProps) => {
  const [form, setForm] = useState<IDonationForm>(DEFAULT_DONATION_FORM);
  const { t } = useLocaleContext();
  const { handleClickBlockOnScreen, editingBlockId } = usePhoneContext();
  const { type, id, color, backgroundColor } = addedBlock;

  const [validationError, setValidationError] = useState({ name: false });
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const amountInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setValidationError((err) => ({ ...err, name: false }));

    setForm((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  const onBlurDonation = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseInt(e.target.value);

    if (value < MIN_DONATION || !value) {
      setForm((prevState) => ({ ...prevState, amount: MIN_DONATION }));
    }
  };

  const renderDonationMethods = DONATION_METHODS.map((gateway, index) => {
    const isActive = form.gateway === gateway.type;

    return (
      <div
        key={index}
        className={cn(
          'bg-gray-100  px-4 py-2 opacity-80 text-black flex items-center flex-col overflow-hidden relative justify-start border-2 rounded-xl cursor-pointer',
          isActive && 'border-blue-400 bg-white opacity-100'
        )}
        onClick={() =>
          setForm((prevVal) => ({ ...prevVal, gateway: gateway.type }))
        }
      >
        <Image src={gateway.icon} width={96} height={48} alt={gateway.type} />
      </div>
    );
  });

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name && !form.is_anonymous) {
      return setValidationError((err) => ({ ...err, name: true }));
    }

    delete form.is_anonymous;

    console.log(form);
  };

  const renderRecommendedDonations = recommendedDonations.map(
    (price, index) => {
      const isActive = price === form.amount;

      return (
        <div
          onClick={() => setForm((prevVal) => ({ ...prevVal, amount: price }))}
          className={cn(
            'bg-white min-w-fit text-black cursor-pointer  relative border overflow-hidden rounded-xl px-3 py-2',
            isActive && 'border-blue-400'
          )}
          key={index}
        >
          <span className="font-semibold">{formatCurrency(price)}</span> UZS
          {isActive && (
            <div className="absolute  rounded-tl-md bg-blue-400 bottom-0 right-0">
              <CheckIcon width={12} className="text-white" />
            </div>
          )}
        </div>
      );
    }
  );

  return (
    <div className="relative" style={{ color }}>
      <form
        onSubmit={handleSubmitForm}
        className={cn('flex-grow flex flex-col')}
        onClick={handleClickBlockOnScreen.bind(null, type, id)}
      >
        <div className="flex-grow">
          <h2 className="text-sm text-start mt-5  font-semibold">
            {t('blocks.donation.your_name_and_amount')}
          </h2>
          <div
            className={cn(
              '  shadow-input bg-white text-black focus-within:border-blue-400  rounded-xl flex items-center gap-2 mt-2',
              form.is_anonymous && 'bg-zinc-200 focus-within:border-zinc-200'
            )}
          >
            <Input
              disabled={form.is_anonymous}
              name="name"
              value={form.name}
              onChange={handleChangeForm}
              placeholder={t('blocks.donation.your_name')}
              className="flex-grow bg-transparent outline-none block min-w-[50px]"
              ref={nameInputRef}
            />
          </div>
          {validationError.name && (
            <p className="text-red-500 text-sm">Enter the name</p>
          )}
          <div className="flex justify-end  items-center gap-1 w-full my-2">
            <label htmlFor="is_anonymous" className="text-sm whitespace-nowrap">
              {t('blocks.donation.send_anonymous')}
            </label>
            <Switch
              id="is_anonymous"
              name="is_anonymous"
              onChange={(e) => console.log(e)}
              checked={form.is_anonymous}
              onCheckedChange={(value) =>
                setForm((prevVal) => ({ ...prevVal, is_anonymous: value }))
              }
            />
          </div>
          <div className="shadow-input bg-white text-black rounded-xl flex items-center gap-2  ">
            <Input
              name="amount"
              type="number"
              onBlur={onBlurDonation}
              value={form.amount}
              onChange={handleChangeForm}
              placeholder={t('blocks.donation.your_donate')}
              className="flex-grow bg-transparent outline-none  block min-w-[50px]"
              ref={amountInputRef}
            />
          </div>
          <p className="text-sm text-telegram-hint mt-1">
            {t('blocks.donation.min')}: {formatCurrency(MIN_DONATION)} UZS
          </p>
          <div
            className={cn(
              'flex flex-nowrap overflow-x-scroll scrollbar-hide gap-2 mt-3'
            )}
          >
            {renderRecommendedDonations}
          </div>
          <textarea
            name="message"
            ref={textAreaRef}
            value={form.message}
            onChange={handleChangeForm}
            placeholder={t('blocks.donation.enter_your_message')}
            className="w-full border text-black shadow-input border-gray-200 focus-within:border-blue-400 px-3 py-2 rounded-xl mt-3"
            rows={3}
          />
          <div className="grid grid-cols-2 gap-2 flex-wrap mt-3">
            {renderDonationMethods}
          </div>
        </div>

        <div className=" py-2">
          <Button
            style={{ background: backgroundColor }}
            className="w-full mx-auto h-14 py-2 text-white bg-blue-500 rounded-full block mt-2 disabled:bg-blue-300 disabled:cursor-not-allowed mb-3"
          >
            {t('blocks.donation.donate')}
          </Button>
        </div>
        <p className={cn(`text-center text-sm my-5`)}>
          {t('blocks.donation.offers')}
        </p>
      </form>
      {editingBlockId === id ? <BlockActions blockId={editingBlockId} /> : null}
    </div>
  );
};
