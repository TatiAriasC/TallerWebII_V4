PGDMP  #                
    {            carros    16.1    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16408    carros    DATABASE     |   CREATE DATABASE carros WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE carros;
                postgres    false            �            1259    16410    cars    TABLE     �   CREATE TABLE public.cars (
    id integer NOT NULL,
    marca character varying NOT NULL,
    linea character varying NOT NULL,
    modelo numeric NOT NULL,
    color character varying NOT NULL,
    compra date NOT NULL
);
    DROP TABLE public.cars;
       public         heap    postgres    false            �            1259    16409    cars_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cars_id_seq;
       public          postgres    false    216            �           0    0    cars_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars.id;
          public          postgres    false    215                       2604    16413    cars id    DEFAULT     b   ALTER TABLE ONLY public.cars ALTER COLUMN id SET DEFAULT nextval('public.cars_id_seq'::regclass);
 6   ALTER TABLE public.cars ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16410    cars 
   TABLE DATA           G   COPY public.cars (id, marca, linea, modelo, color, compra) FROM stdin;
    public          postgres    false    216   �
       �           0    0    cars_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.cars_id_seq', 8, true);
          public          postgres    false    215                       2606    16417    cars cars_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.cars DROP CONSTRAINT cars_pkey;
       public            postgres    false    216            �   �   x����
�0�s�.I�u�1du����1����y��'��	��n}c��A�$0��̂5����a��ݻ.�XB>�SH�`$1��~ZZ�0��N�V��%�2&���DZ�̠��:�k?��`]�E���(Uh��L=UƜ���U�E�!��C�/�z@�     