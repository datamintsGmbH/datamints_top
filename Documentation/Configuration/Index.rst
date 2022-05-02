.. include:: ../Includes.txt

.. _configuration:

=============
Configuration
=============

Please include the Static Typoscript Template, either by going to "Template -> Includes" and selecting "datamints Top" OR by including them in your site package:

setup

.. code-block:: typoscript

   <INCLUDE_TYPOSCRIPT: source="FILE:EXT:datamints_top/Configuration/TypoScript/setup.typoscript">

constants

.. code-block:: typoscript

   <INCLUDE_TYPOSCRIPT: source="FILE:EXT:datamints_top/Configuration/TypoScript/constants.typoscript">


.. _configuration-typoscript:


Overwrite Template
===================

.. code-block:: typoscript

   plugin.tx_datamintstop{
     view{
       templateRootPath = EXT:your_extension/Resources/Private/Templates
     }
}

TypoScript Reference
====================

======================================  =============  ======================================================================================  =====================================
Property:                               Data type:     Description:                                                                            Default:
======================================  =============  ======================================================================================  =====================================
view.templateRootPath                   string         Path to template files
======================================  =============  ======================================================================================  =====================================
